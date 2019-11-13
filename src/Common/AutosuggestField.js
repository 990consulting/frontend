/*
 * Copyright (c) 2018 Open990.org, Inc.. All rights reserved.
 */

import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';

import Autosuggest from 'react-autosuggest';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';

import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import { styles } from 'Common/autosuggestStyles'
import SearchIcon from '@material-ui/icons/Search';

import {
  root, 
  //search as searchRoute,
  //peopleSearch
} from 'App/routes';

class AutosuggestField extends PureComponent {
  state = {
    value: '',
    suggestions: [],
    suggestionUrl: ''
  };
  
  renderInputComponent = (inputProps) => {
    const {
      classes,
      inputRef = () => {},
      ref,
      ...other
    } = inputProps;

    const {
      small,
      onSearchClick
    } = this.props;

    const endAdornment = (
      <InputAdornment 
        position="end" 
      >
      <div
        onClick={ (event) => onSearchClick ? onSearchClick(event): console.log("search clicked")
        }
      >
        <SearchIcon className={classes.bannerInputIcon}/>
      </div>
      </InputAdornment>
    );

    return (
      <TextField
        className={this.props.small ?
          classes.smallBannerTextField :
          classes.bannerTextField
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
          },
        }}
        {...other}
      />
    );
  };

  renderSuggestion = (suggestion, {query, isHighlighted}) => {
    const matches = match(suggestion.label, query);
    const parts = parse(suggestion.label, matches);

    return (
      <MenuItem selected={isHighlighted} component="div">
        <div>
          {parts.map((part, index) => {
            return part.highlight ? (
              <span key={String(index)} style={{fontWeight: 500}}>
                {part.text}
              </span>
            ) : (
              <strong key={String(index)} style={{fontWeight: 300}}>
                {part.text}
              </strong>
            );
          })}
        </div>
      </MenuItem>
    );
  };

  getSuggestionValue = (suggestion) => {
    const {history} = this.props;
    const url = suggestion.url || root;
    this.setState({
      suggestionUrl: url
    });
    history.push(url);
    return suggestion.label;
  };

  handleSuggestionsFetchRequested = ({value}) => {

    const getSuggestion = this.props.suggestion;
    const baseUrl = this.props.baseUrl;
    const slug = this.props.slug;
  
    getSuggestion(value)
    .then(res => res.data)
    .then(suggestions => {
      suggestions.push({
        label: `See all matches for "${value}"`,
        url: `${baseUrl}?${slug}=${value}`
      });
      this.setState({
        suggestions: suggestions
      });
    });
  };

  handleSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };

  onSuggestionSelected = () =>{   
    this.setState({
      value: ''
    });
    window.location = this.state.suggestionUrl;
  }

  handleChange = name => (event, {newValue}) => {
    this.setState({
      value: newValue,
    }, () => {
      if (!this.props.onChangeValue) return;
      this.props.onChangeValue(newValue);
    });
  };

  render() {
    const {
      classes,
      placeholder,
      small,
      mobile,
      handleOnBlur
    } = this.props;

    const autosuggestProps = {
      renderInputComponent: this.renderInputComponent,
      suggestions: this.state.suggestions,
      onSuggestionsFetchRequested: this.handleSuggestionsFetchRequested,
      onSuggestionsClearRequested: this.handleSuggestionsClearRequested,
      onSuggestionSelected: this.onSuggestionSelected,
      getSuggestionValue: this.getSuggestionValue,
      renderSuggestion: this.renderSuggestion,
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
            onChange: this.handleChange(),
            onBlur: handleOnBlur ? () => handleOnBlur() : undefined
          }}
          theme={{
            container: small ? classes.smallContainer : classes.container,
            suggestionsContainerOpen: small ? classes.smallSuggestionsContainerOpen : classes.suggestionsContainerOpen,
            suggestionsList: classes.suggestionsList,
            suggestion: classes.suggestion,
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