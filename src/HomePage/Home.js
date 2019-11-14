/*
 * Copyright (c) 2019 Open990.org, Inc.. All rights reserved.
 */

import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';

//import StupidHomeBanner from 'HomePage/StupidHomeBanner';
import HomeCardRibbon from 'HomePage/HomeCardRibbon';
import HomeBanner from 'HomePage/HomeBanner';
const styles = () => ({
  container: {
    height: '100%'
  }
});

class Home extends React.Component {
  render() {
    const { headline, asProps, activeTab, searchByQuery, afterContent } = this.props;
    return (
      <Fragment>
        <Helmet>
          <title>Open990 | Nonprofit lookup with 2+ million free reports</title>
          <meta name="description" content="Use our non-profit organization search engine to find up-to-date revenue, fundraising, compensation, etc. details on charities, foundations, & other nonprofits." />
          <meta name="robots" content="all"/>
          <link rel="canonical" href="https://www.open990.org/org/" />
        </Helmet>
        <div className="Home">
          <Grid container className={this.props.classes.container}>
            <HomeBanner
              headline={headline}
              asProps={asProps}
              activeTab={activeTab}
              searchByQuery={searchByQuery}
              afterContent={afterContent}
            />
            <HomeCardRibbon/>
          </Grid>
        </div>
      </Fragment>
    );
  }
}

export default withStyles(styles)(Home);