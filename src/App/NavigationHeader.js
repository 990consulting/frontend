/*
 * Copyright (c) 2018 Open990.org, Inc.. All rights reserved.
 */

import React, {Component, Fragment} from 'react';
import NavLink from 'react-router-dom/NavLink';
import { withRouter } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Hidden from '@material-ui/core/Hidden'
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuList from '@material-ui/core/MenuList';
import Button from '@material-ui/core/Button';

import withViewCheck from 'hoc/withViewCheck';
import AutosuggestField from 'Common/AutosuggestField';

import DownIcon from '@material-ui/icons/KeyboardArrowDown';
import SearchIcon from '@material-ui/icons/Search';
import Logo from 'assets/Logo.svg';
import LinkIcon from 'assets/external-link.svg';
import MenuIcon from '@material-ui/icons/Menu';

import { styles } from 'App/NavigationHeaderStyles';
import apiClient from 'App/ApiClient';
import { orgASProps } from "../Common/autosuggestProperties";
import { consulting } from 'App/routes';
import {
  contact,
  benchmark,
  root,
  customData,
  catalog,
  resources
} from 'App/routes';
//import Api from "../Static/Api";



class NavigationHeader extends Component {
  constructor(props) {
    super(props);
    this.anchorListMenuEl = null;
    this.state = {
      anchorEl: null,
      openMenuList: false,
      isSearchBarActive: false
    };
    this.asField = this.makeAsField();
  }
 
  makeAsField = () => {
    return (<AutosuggestField
      {...orgASProps}
      onSearchClick={this.onSubmitclick}
      onChangeValue={this.onSearchChange}
      additionaClasses={this.props.classes.bootstrapRoot}
      small={true}
    />);
  };
  
  onSearchChange = (query) => {
    this.setState({
      searchValue: query
    });
  };

  startSearch = () => {
    this.setState({
      isSearchBarActive: true
    })
  };

  endSearch = () => {
    this.setState({
      isSearchBarActive: false
    })
  };

  handleClick = event => {
    this.setState({
      anchorEl: event.currentTarget
    });
  };

  handleClose = () => {
    this.setState({
      anchorEl: null
    });
  };

  handleListMenuToggle = () => {
    this.setState(state => ({openMenuList: !state.openMenuList}));
  };

  handleListMenuClose = event => {
    if (this.anchorListMenuEl.contains(event.target)) {
      return;
    }

    this.setState({openMenuList: false});
  };
  
  submit() {
    //console.log("submit triggered (NavigationHeader)");
    const {history} = this.props;
    const {searchValue} = this.state;
    
    apiClient.searchOrganizationByQuery(searchValue)
      .then(res => res.data)
      .then(url => {
        history.push(url);
        this.setState({ searchValue: '' })
      })
  }
  
  onSubmitclick = (event) => {
    //console.log("onSubmitClick triggered (NavigationHeader)");
    event.preventDefault();
    this.submit();
  };

  render() {
    const { 
        classes, 
        isViewXs, 
        isViewSm, 
    } = this.props;
    const { 
        anchorEl, 
        openMenuList, 
        isSearchBarActive 
    } = this.state;
    const open = Boolean(anchorEl);
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
              className={classes.icon}
              aria-label="More"
              aria-owns={open ? 'long-menu' : null}
              aria-haspopup="true"
              onClick={this.handleClick}
            >
              {/* <MoreVertIcon /> */}
            </MenuIcon>
          </Grid>
        </Hidden>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={this.handleClose}
          PaperProps={{
            style: {
              width: 200,
            },
          }}
        >
          <div className={classes.column}>
            {links.map((link, index) => {
                if (link) {
                  return (
                    <MenuItem
                      classes={{root: classes.menuListItem}}
                      key={`links-${index}`}
                      onClick={this.handleClose}
                    >
                      {link}
                    </MenuItem>
                  )
                } else {
                  return undefined
                }
              }
            )}
          </div>
        </Menu>
        {isViewSm && isSearchBarActive && (
          <Grid item xs={6} sm={3} lg={4} className={classes.logoMenu}>
            <NavLink to={root}>
              <img src={Logo} alt="logo"/>
            </NavLink>
          </Grid>
        ) }
        {!isSearchBarActive ? (
          <Fragment>
            <Grid item xs={6} sm={3} md={2} className={classes.logoMenu}>
              <NavLink to={root}>
                <img src={Logo} alt="logo"/>
              </NavLink>
            </Grid>
            <Hidden only={'xs'}>
              <Grid item sm={8} md={6} className={classes.navMenu}>
                {links}
              </Grid>
            </Hidden>
            <Hidden mdUp>
              <Grid item xs={3} sm={1} md={2} className={classes.searchMenu}>
                <Button onClick={this.startSearch} className={classes.button}>
                  <SearchIcon className={classes.searchIcon}/>
                </Button>
              </Grid>
            </Hidden>
            <Hidden smDown>
                <Grid item sm={3} className={classes.searchMenu}>
                  <form onSubmit={onSubmitClick}>
                    {this.asField}
                  </form>
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
/*
                    <AutosuggestField
                      {...orgASProps}
                      onSearchClick={onSubmitClick}
                      onChangeValue={this.onSearchChange}
                      additionaClasses={classes.bootstrapRoot}
                      small={true}
                    />

 */
export default withStyles(styles)(withViewCheck()(withRouter(NavigationHeader)));
