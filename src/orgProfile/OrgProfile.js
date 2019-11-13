/*
 * Copyright (c) 2018 Open990.org, Inc.. All rights reserved.
 */

import React, { Fragment } from 'react';

import withStyles from '@material-ui/core/styles/withStyles';

import SidebarPage from 'sidebarPage/SidebarPage';
import { styles } from 'orgProfile/orgProfileStyles'
import { withRouter } from 'react-router-dom';
import apiClient from 'App/ApiClient';
import OrgProfileHeader from "./OrgProfileHeader";
import OrgProfileDetails from "./OrgProfileDetails";
import OrgProfileSidebarContent from './OrgProfileSidebarContent'
import OrgProfileHelmet from './OrgProfileHelmet';
import Loader from 'react-loader-spinner'
class OrganizationProfile extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      header: null,
      body: null,
      periods: null,
      meta: null,
      error: false
    }
  }
  
  componentDidMount() {
    if (!this.state.loaded) {
      const ein = this.props.match.params.ein;
      apiClient.getOrgSkeleton(ein)
        .then(res => {
          this.setState({
            loaded: true,
            header: res.data.header,
            body: res.data.body,
            periods: res.data.periods,
            meta: res.data.meta
          });
        }).catch(error => {
        this.setState({
          error: true
        })
      });
    }
  }

  /*componentDidUpdate(prevProps, prevState, snapshot) {
    const history = this.props.history;
    const meta = this.state.meta;
    
    if (this.state.loaded) {
      const actual = history.location.pathname;
      const expected = meta.canonical;
      if (actual !== expected) {
        history.replace(expected);
      }
    }
  }*/
  
  render() {
    const { loaded, meta, header, body, periods, error } = this.state;
    const { classes } = this.props;
    if (loaded) {
      const bodyContent = (<Fragment>
        <OrgProfileHelmet meta={meta} />
        <OrgProfileHeader content={header} />
        <OrgProfileDetails body={body} periods={periods} />
      </Fragment>);
      const sidebarContent = <OrgProfileSidebarContent body={body} />;
      return (<div id="org-profile">
        <SidebarPage sidebarContent={sidebarContent} bodyContent={bodyContent} />
      </div>);
    } else if (error) {
      return <div>Something went wrong</div>
    } else {
      return (<div className={classes.loaderWrapper}>
        <Loader
          type='ThreeDots'
          color='#6839d3'
          height='75'
          width='75'
        />
      </div>)
    }
  }
}

export default withStyles(styles)(withRouter(OrganizationProfile));
