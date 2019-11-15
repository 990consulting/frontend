/*
 * Copyright (c) 2018 Open990.org, Inc.. All rights reserved.
 */

import React, { PureComponent } from "react";
import { withRouter } from "react-router-dom";

import Autosuggest from "react-autosuggest";
import match from "autosuggest-highlight/match";
import parse from "autosuggest-highlight/parse";

import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import { styles } from "Common/autosuggestStyles";
import SearchIcon from "@material-ui/icons/Search";

import {
  root
  //search as searchRoute,
  //peopleSearch
} from "App/routes";

class AutosuggestField extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      suggestions: [],
      suggestionUrl: "",
      isRequestFromMobile: this.isMobilePlatform()
    };
    this.onSearch = this.onSearch.bind(this);
  }

  isMobilePlatform() {
    if (
      navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/webOS/i) ||
      navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/iPad/i) ||
      navigator.userAgent.match(/iPod/i) ||
      navigator.userAgent.match(/BlackBerry/i) ||
      navigator.userAgent.match(/IEMobile/i) ||
      navigator.userAgent.match(/WPDesktop/i) ||
      navigator.userAgent.match(/Windows Phone/i)
    ) {
      return true;
    } else {
      return false;
    }
  }

  onSearch = (event) => {
    if(this.state.suggestions.length > 1){      
      window.location.href = this.state.suggestions[0].url;
    } else {
      this.setState({
        value: ''
      });
      const {onSearchClick} = this.props;
      onSearchClick ? onSearchClick(event) : console.log("search clicked")
    }
  }

  renderInputComponent = inputProps => {
    const { classes, inputRef = () => {}, ref, ...other } = inputProps;

    const { small, onSearchClick } = this.props;

    const endAdornment = (
      <InputAdornment position="end">
        <div onClick={event => this.onSearch(event)} onSubmit={event => this.onSearch(event)}>
          <SearchIcon className={classes.bannerInputIcon} />
        </div>
      </InputAdornment>
    );

    return (
      <TextField
        className={
          this.props.small
            ? classes.smallBannerTextField
            : classes.bannerTextField
        }
        id="bootstrap-input"
        InputProps={{
          disableUnderline: true,
          endAdornment: endAdornment,
          inputRef: node => {
            ref(node);
            inputRef(node);
          },
          classes: {
            input: classes.input,
            root: small ? classes.smallbootstrapRoot : classes.bootstrapRoot
          }
        }}
        {...other}
      />
    );
  };

  renderSuggestion = (suggestion, { query, isHighlighted }) => {
    const matches = match(suggestion.label, query);
    const parts = parse(suggestion.label, matches);

    return (
      <MenuItem selected={isHighlighted} component="div">
        <div>
          {parts.map((part, index) => {
            return part.highlight ? (
              <span key={String(index)} style={{ fontWeight: 500 }}>
                {part.text}
              </span>
            ) : (
              <strong key={String(index)} style={{ fontWeight: 300 }}>
                {part.text}
              </strong>
            );
          })}
        </div>
      </MenuItem>
    );
  };

  getSuggestionValue = suggestion => {
    this.setState({
      suggestionUrl: suggestion.url || root
    });
    //history.push(url);
    return suggestion.label;
  };

  handleSuggestionsFetchRequested = ({ value }) => {
    const getSuggestion = this.props.suggestion;
    const baseUrl = this.props.baseUrl;
    const slug = this.props.slug;

    getSuggestion(value)
      .then(res => res.data)
      .then(suggestions => {
        suggestions = this.state.isRequestFromMobile
          ? suggestions.slice(0, this.props.mobileSearchSuggestions)
          : suggestions.slice(0, this.props.desktopSearchSuggestion);
        suggestions.push({
          label: `See all matches for "${value}"`,
          url: `${baseUrl}?${slug}=${value}`
        });
        this.setState({
          suggestions: suggestions
        });
      });
  };

  handleChange = (event, { newValue, method }) => {
    const shouldUpdateSelectedValue =
      method === "type" || method === "enter" || method === "click";
    shouldUpdateSelectedValue &&
      this.setState(
        {
          value: newValue
        },
        () => {
          if (!this.props.onChangeValue) return;
          this.props.onChangeValue(newValue);
        }
      );
  };

  onSuggestionSelected = (event, { suggestion }) => {
    this.setState({
      value: ""
    });
    window.location.href = suggestion.url;
  };

  render() {
    const { classes, placeholder, small, mobile, handleOnBlur } = this.props;

    const autosuggestProps = {
      renderInputComponent: this.renderInputComponent,
      suggestions: this.state.suggestions,
      onSuggestionsFetchRequested: this.handleSuggestionsFetchRequested,
      onSuggestionsClearRequested: this.handleSuggestionsClearRequested,
      onSuggestionSelected: this.onSuggestionSelected,
      getSuggestionValue: this.getSuggestionValue,
      highlightFirstSuggestion: true,
      renderSuggestion: this.renderSuggestion
    };

    return (
      <div className={classes.root}>
        <Autosuggest
          {...autosuggestProps}
          inputProps={{
            autoFocus: mobile,
            classes,
            placeholder: placeholder,
            value: this.state.value,
            onChange: this.handleChange,
            onBlur: handleOnBlur ? () => handleOnBlur() : undefined
          }}
          theme={{
            container: small ? classes.smallContainer : classes.container,
            suggestionsContainerOpen: small
              ? classes.smallSuggestionsContainerOpen
              : classes.suggestionsContainerOpen,
            suggestionsList: classes.suggestionsList,
            suggestion: classes.suggestion
          }}
          renderSuggestionsContainer={options => (
            <Paper {...options.containerProps} square>
              {options.children}
            </Paper>
          )}
        />
      </div>
    );
  }
}

export default withStyles(styles)(withRouter(AutosuggestField));
