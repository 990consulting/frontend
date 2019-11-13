/*
 * Copyright (c) 2018 Open990.org, Inc.. All rights reserved.
 */

import React, { Fragment} from 'react';
import apiClient from 'App/ApiClient';
import { withRouter, Link } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';
import Home from 'HomePage/Home';
import { peopleASProps } from 'Common/autosuggestProperties'
import { peopleSearch} from "../App/routes";
import Grid from '@material-ui/core/Grid';
import { styles } from 'HomePage/HomeBannerStyles';

class HomePeople extends React.Component {
  headline = (<h1>View executive compensation and trustee data from {this.props.isViewLg && <br/>} <span>1,813,867</span>  organizations.</h1>);

  afterContent = <Fragment>
    <Grid item xs={12} className={this.props.classes.bannerAdvancedSearch}>
      <Link to={peopleSearch}>
        Advanced people search
      </Link>
    </Grid>
  </Fragment>;

  render() {
    const { location } = this.props;

    return (<Home
        headline={this.headline}
        asProps={peopleASProps}
        activeTab={1}
        location={location}
        searchByQuery={apiClient.searchPeopleByQuery}
        afterContent={this.afterContent}
    />);
  }
}

export default withStyles(styles)(withRouter(HomePeople));
