/*
 * Copyright (c) 2019 Open990.org, Inc.. All rights reserved.
 */

import React from 'react';
import { withRouter } from 'react-router-dom';
import classNames from 'classnames';

import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import { styles } from "sidebarPage/sidebarStyles";
import MobileSidebar from "sidebarPage/MobileSidebar";
import DesktopSidebar from "sidebarPage/DesktopSidebar";

class Sidebar extends React.Component {

  // When the user clicks on the button, scroll to the top of the document
  scrollToTop = () => {
    //console.log("*scrollToTop triggered");
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  handleScroll = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  render() {
    const {
      classes,
      toggleCollapse,
      collapsed,
      children
    } = this.props;
    
    const scrollToTop = this.scrollToTop.bind(this);
    return (
      <div>
        <Grid
          container
          className={classNames('slider', classes.slider) + " sidebar-container"}
          onScroll={this.handleScroll}
        >
          <MobileSidebar
            scrollToTop={scrollToTop}
            collapsed={collapsed === undefined ? !(window.location.pathname.includes('/search/') && !window.location.href.includes('?')) : collapsed}
            toggleCollapse={toggleCollapse}
          >
            {children}
          </MobileSidebar>
          <DesktopSidebar
            scrollToTop={scrollToTop}
            collapsed={collapsed === undefined ? false : collapsed}
            toggleCollapse={toggleCollapse}
          >
            {children}
          </DesktopSidebar>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(withRouter(Sidebar));
