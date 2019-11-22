/*
 * Copyright (c) 2019 Open990.org, Inc.. All rights reserved.
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


const getPathname = url => {
  const a = document.createElement('a')
  a.href = url
  return a.pathname
}

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
  
  fetchData() {
    return apiClient.getOrgSkeleton(this.props.match.params.ein)
      .catch(() => this.setState({ error: true }))
  }

  componentDidMount() {
    this.fetchData().then(({ data }) => {
      const canonicalPathname = getPathname(data.meta.canonical)

      if (canonicalPathname !== this.props.history.location.pathname) {
        this.props.history.replace(canonicalPathname)
      }
      this.setState({ ...data, loaded: true })
    })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.ein !== this.props.match.params.ein) {
      this.setState({ loaded: false });
      this.fetchData().then(({ data }) => this.setState({ ...data, loaded: true }))
    }
  }


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
        <SidebarPage sidebarCollapsed sidebarContent={sidebarContent} bodyContent={bodyContent} />
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
