/*
 * Copyright (c) 2019 Open990.org, Inc.. All rights reserved.
 */

import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import classNames from 'classnames';
import { styles } from 'sidebarPage/sidebarStyles';
import { withRouter } from 'react-router-dom';

class OrgProfileSidebarContent extends React.Component {
  
  componentDidMount() {
    var hash = window.location.hash.substr(1);

    this.onLinkClick(hash)
  }
  
  onLinkClick = (id) => {
    if (!id) return;
    const element = document.getElementById(id);
    if (!element) {
      //console.log("Could not find element " + id);
    }

    var bodyRect = document.body.getBoundingClientRect(),
    elemRect = element.getBoundingClientRect(),
    offset   = elemRect.top - bodyRect.top;

    window.scrollTo(0, offset - 100);
    
    if(element.id) {
      const {history} = this.props;
      const pathname = history.location.pathname;
      history.push(`${pathname}#${element.id}`)
    }
  };
  
  buildTocItem(item, ancestor) {
    const { classes } = this.props;
    return(
      <div className={classes.tocList} key={`toc-list-${item.card_id}`}>
        <div
          className={classNames(classes.tocItem, classes.link)}
          onClick={() => this.onLinkClick(/*ancestor ? ancestor.card_id : */item.card_id)}
        >
          <span className={classNames(classes.tocDot)}>{item.body}</span>
        </div>
        <div className={classes.tocItem}>
          {this.buildToc(item.content, item)}
        </div>
      </div>
    )
  }
  
  buildToc(data, ancestor) {
    const ret = [];
    for (let i = 0; i < data.length; i++) {
      const item = data[i];
      if (item.type === 'nested' && item.toc && item.content) {
        const tocItem = this.buildTocItem(item, ancestor);
        ret.push(tocItem);
      }
    }
    return ret;
  }
  
  render() {
    const {body, classes} = this.props;
    const style = {
      'position': 'relative',
      'top': '-53px'
    };
  
    return(<Grid container className={classes.menu} style={style} id="sidebar">
      <div style={{"width": "100px"}}>
        <h2 onClick={() => window.scrollTo(0, 0)} style={{"cursor": "pointer"}}>Navigate</h2>
      </div>
      {this.buildToc(body)}
    </Grid>);
  }
}

export default withRouter(withStyles(styles)(OrgProfileSidebarContent));