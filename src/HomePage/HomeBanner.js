/*
 * Copyright (c) 2018 Open990.org, Inc.. All rights reserved.
 */

import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import MaxContainer from 'hoc/MaxContainer';
import withViewCheck from 'hoc/withViewCheck';
import AutosuggestField from 'Common/AutosuggestField';
import { withRouter } from 'react-router-dom';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import HomeBannerTabs from 'HomePage/HomeBannerTabs';
import { styles } from 'HomePage/HomeBannerStyles';

class HomeBanner extends React.Component {
  constructor(props) {
    super(props);
    //console.log(JSON.stringify(Object.keys(props)));
    this.state = {
      searchValue: ''
    };
  }
  
  submit() {
    //console.log("submit triggered");
    const {history, searchByQuery} = this.props;
    const {searchValue} = this.state;
  
    searchByQuery(searchValue)
      .then(res => res.data)
      .then(url => {
        history.push(url);
      })
  }
  
  onSearchChange = (query) => {
    this.setState({
        searchValue: query
    });
  };
  
  onSubmitclick = (event) => {
    //console.log("onSubmitClick triggered (HomeBanner)");
    event.preventDefault();
    this.submit();
  };
  
  render() {
    const {classes, activeTab, asProps, afterContent} = this.props;
    
    const onSubmitClick = this.onSubmitclick.bind(this);
    
    return (
      <Grid item xs={12}>
        <div className={classes.banner}>
          <MaxContainer>
            {this.props.headline}
            <form onSubmit={onSubmitClick}>
              <Grid container className={classes.bannerContainer}>
                <Grid item xs={10} md={6}>
                  <Grid container className={classNames(classes.bannerContainer, classes.modifyContainer)}>
                    <HomeBannerTabs activeTab={activeTab} />
                    <Grid item xs={12} className={classes.bannerSearch}>
                      <AutosuggestField
                        onSearchClick={onSubmitClick}
                        onChangeValue={this.onSearchChange}
                        {...asProps}
                      />
                    </Grid>
                    {afterContent}
                  </Grid>
                </Grid>
              </Grid>
            </form>
          </MaxContainer>
        </div>
      </Grid>
    );
  }
}

export default withStyles(styles)(withViewCheck()(withRouter(HomeBanner)));

