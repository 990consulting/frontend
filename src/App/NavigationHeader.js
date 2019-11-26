/*
 * Copyright (c) 2019 Open990.org, Inc.. All rights reserved.
 */

import React, { Component, Fragment } from "react";
import ReactDOM from 'react-dom';
import NavLink from "react-router-dom/NavLink";
import { withRouter } from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Hidden from "@material-ui/core/Hidden";
import Button from "@material-ui/core/Button";
import withViewCheck from "hoc/withViewCheck";
import AutosuggestField from "Common/AutosuggestField";
import SearchIcon from "@material-ui/icons/Search";
import Logo from "assets/Logo.svg";
import MenuIcon from "@material-ui/icons/Menu";
import { styles } from "App/NavigationHeaderStyles";
import apiClient from "App/ApiClient";
import { orgASProps } from "../Common/autosuggestProperties";
import { contact, root, catalog, resources } from "App/routes";
//import Api from "../Static/Api";

class NavigationHeader extends Component {
  constructor(props) {
    super(props);
    this.anchorListMenuEl = null;
    this.state = {
      isMenuOpen: false,
      isMenuListOpen: false,
      isSearchBarActive: false
    };
    this.asField = this.makeAsField();
    this.menuIcon = React.createRef();
  }

  makeAsField = () => {
    return (
      <AutosuggestField
        {...orgASProps}
        onSearchClick={this.onSubmitclick}
        onChangeValue={this.onSearchChange}
        additionaClasses={this.props.classes.bootstrapRoot}
        small={true}
      />
    );
  };

  onSearchChange = query => {
    this.setState({
      searchValue: query
    });
  };

  startSearch = () => {
    this.setState({
      isSearchBarActive: true
    });
  };

  endSearch = () => {
    this.setState({
      isSearchBarActive: false
    });
  };

  handleClick = () => {
    this.setState({
      isMenuOpen: true
    });
  };

  handleClose = () => {
    this.setState({
      isMenuOpen: false
    });
  };

  handleListMenuToggle = () => {
    this.setState(state => ({ isMenuListOpen: !state.isMenuListOpen }));
  };

  handleListMenuClose = event => {
    if (this.anchorListMenuEl.contains(event.target)) {
      return;
    }

    this.setState({ isMenuListOpen: false });
  };

  submit() {
    const { searchValue } = this.state;
    apiClient
      .searchOrganizationByQuery(searchValue)
      .then(res => res.data)
      .then(url => {
        this.props.history.push(url);
        this.setState({ searchValue: "" });
      });
  }

  onSubmitclick = event => {
    event.preventDefault();
    this.submit();
  };

  render() {
    const { classes, isViewSm } = this.props;
    const { isSearchBarActive, isMenuOpen } = this.state;
    const onSubmitClick = this.onSubmitclick.bind(this);

    const links = [
      <span className={classes.simpleLink}>
        <NavLink to={root}>Home</NavLink>
      </span>,
      <span className={classes.simpleLink}>
        <NavLink to={catalog}>Datasets</NavLink>
      </span>,
      <span className={classes.simpleLink}>
        <NavLink to={resources}>Resources</NavLink>
      </span>,
      <span className={classes.simpleLink}>
        <NavLink to={contact}>Contact</NavLink>
      </span>
    ];

    return (
      <Grid container className={classes.root}>
        <Hidden smUp>
          <Grid item xs={isSearchBarActive ? 2 : 3}>
            <MenuIcon
              ref={this.menuIcon}
              className={classes.icon}
              aria-label="More"
              aria-owns={isMenuOpen ? "long-menu" : null}
              aria-haspopup="true"
              onClick={this.handleClick}
            />
          </Grid>
        </Hidden>
        {this.menuIcon.current && (
          <Menu
            id="long-menu"
            anchorEl={ReactDOM.findDOMNode(this.menuIcon.current)}
            open={isMenuOpen}
            onClose={this.handleClose}
            PaperProps={{
              style: {
                width: 200
              }
            }}
          >
            <div className={classes.column}>
              {links.map((link, index) => {
                if (link) {
                  return (
                    <MenuItem
                      classes={{ root: classes.menuListItem }}
                      key={`links-${index}`}
                      onClick={this.handleClose}
                    >
                      {link}
                    </MenuItem>
                  );
                } else {
                  return undefined;
                }
              })}
            </div>
          </Menu>
        )}
        {isViewSm && isSearchBarActive && (
          <Grid item xs={6} sm={3} lg={4} className={classes.logoMenu}>
            <NavLink to={root}>
              <img src={Logo} alt="logo" />
            </NavLink>
          </Grid>
        )}
        {!isSearchBarActive ? (
          <Fragment>
            <Grid item xs={6} sm={3} md={2} className={classes.logoMenu}>
              <NavLink to={root}>
                <img src={Logo} alt="logo" />
              </NavLink>
            </Grid>
            <Hidden only={"xs"}>
              <Grid item sm={8} md={6} className={classes.navMenu}>
                {links}
              </Grid>
            </Hidden>
            <Hidden mdUp>
              <Grid item xs={3} sm={1} md={2} className={classes.searchMenu}>
                <Button onClick={this.startSearch} className={classes.button}>
                  <SearchIcon className={classes.searchIcon} />
                </Button>
              </Grid>
            </Hidden>
            <Hidden smDown>
              <Grid item sm={3} className={classes.searchMenu}>
                <form onSubmit={onSubmitClick}>{this.asField}</form>
              </Grid>
            </Hidden>
          </Fragment>
        ) : (
          <Grid item xs={10} sm={9}>
            <AutosuggestField
              {...orgASProps}
              onSearchClick={onSubmitClick}
              onChangeValue={this.onSearchChange}
              mobile={true}
              handleOnBlur={this.endSearch}
            />
          </Grid>
        )}
      </Grid>
    );
  }
}
export default withStyles(styles)(
  withViewCheck()(withRouter(NavigationHeader))
);
