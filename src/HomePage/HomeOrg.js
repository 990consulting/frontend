/*
 * Copyright (c) 2018 Open990.org, Inc.. All rights reserved.
 */

import React, { Fragment} from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Home from 'HomePage/Home';
import apiClient from 'App/ApiClient';
import { orgASProps } from 'Common/autosuggestProperties'
import {orgSearch} from "App/routes";
import { withRouter, Link } from 'react-router-dom';
import {exampleSearch, homePeople} from "../App/routes";
import Grid from '@material-ui/core/Grid';
import { styles } from 'HomePage/HomeBannerStyles';

class HomeOrg extends React.Component {
  headline = (<h1><span>2+ million</span> nonprofits. <span>Zero</span> paywalls.</h1>);

  afterContent = (<Fragment>
    <Grid item xs={12} className={this.props.classes.bannerAdvancedSearch}>
      <Link to={orgSearch}>
        <div className={this.props.classes.belowSearchText} >Advanced organization search</div>
      </Link>
    </Grid>
    <Grid item xs={12} className={this.props.classes.bannerAdvancedSearch}>
      <div className={this.props.classes.belowSearchText} >Example: <Link to={'/org/133081500/committee-to-protect-journalists-inc'}>Committee to Protect Journalists</Link>, <Link to={'/org/133081500/committee-to-protect-journalists-inc/'}>13-3081500</Link></div>
    </Grid>
  </Fragment>);

  render() {
    const { location } = this.props;
    return (<Home
      headline={this.headline}
      asProps={orgASProps}
      activeTab={0}
      location = {location}
      searchByQuery = {apiClient.searchOrganizationByQuery}
      afterContent={this.afterContent}
    />);
  }
}

export default withStyles(styles)(withRouter(HomeOrg));
