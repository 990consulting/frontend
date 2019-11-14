/*
 * Copyright (c) 2019 Open990.org, Inc.. All rights reserved.
 */

import React from 'react';
import { withRouter } from 'react-router-dom';
import classNames from 'classnames';

import withViewCheck from 'hoc/withViewCheck';

import withStyles from '@material-ui/core/styles/withStyles';
import Dialog from '@material-ui/core/Dialog';
import { Transition } from 'sidebarPage/SidebarTransition';
import {styles} from 'sidebarPage/sidebarStyles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import faBars from '@fortawesome/fontawesome-free-solid/faBars';

class MobileSidebar extends React.Component {
  render() {
    const {
      //scrollToTop,
      collapsed,
      toggleCollapse,
      classes,
      children
    } = this.props;
    
    return(
      <div className="mobile-sidebar">
        <div className="mobile-sidebar-button-container" onClick={toggleCollapse}>
          <div className="mobile-sidebar-button">
            <FontAwesomeIcon
              icon={faBars}
              rotation={90}
            />
          </div>
        </div>
        {!collapsed && (
          <Dialog
            fullScreen
            className={classes.dialog + ' mobile-sidebar-dialog'}
            open={!collapsed}
            TransitionComponent={Transition}
          >
            <div
              className={classes.mobileButton}
              onClick={toggleCollapse}
            >
              <FontAwesomeIcon
                icon={faBars}
                rotation={90}
              />
            </div>
        
            <div className={classes.menu}>
              <div
                onClick={(e) => {
                  if(e.target.tagName === 'SPAN') {
                    toggleCollapse()
                  }
                }}
                className={classNames(classes.tocItem, classes.link)}
              >
                {children}
              </div>
            </div>
          </Dialog>
        )
        }
      </div>
    )
  }
}

export default withStyles(styles)(withViewCheck()(withRouter(MobileSidebar)));
