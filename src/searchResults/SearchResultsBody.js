/*
 * Copyright (c) 2019 Open990.org, Inc.. All rights reserved.
 */

import React from 'react';
import ReactTable from 'react-table';
import { withRouter } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import { styles } from 'searchResults/searchStyles';
import Loader from 'react-loader-spinner'

export class SearchResultsBody extends React.Component {
  state = {
    page: (+this.props.history.location.hash.slice(1) || 1) - 1,
    caption: '',
    matches: [],
    params: undefined,
    lastSearch: undefined
  };
  
  getDataBasedOnSearchSlug() {
    const { history:{location:{search}}, fetchResults } = this.props; // an interesting piece of syntax

    this.setState({lastSearch: search});

    fetchResults(search).then(response => {
      const data = response.data;
      this.setState({
        caption: data.caption,
        matches: data.matches,
        params: data.params
      })
    })
  }
  
  // TODO Do we need both of these?
  componentWillMount() {
    this.getDataBasedOnSearchSlug();
  }
 
  // TODO Do we need both of these?
  componentWillReceiveProps(newProps) {
    const { history:{location:{search:newSearch}} } = newProps;

    if(this.state.lastSearch !== newSearch) {
      this.getDataBasedOnSearchSlug();
    }
  }

  renameAllRows(matches) {
    const { renameRow } = this.props;
    return matches.map(renameRow);
  }
  
  getData() {
    const { matches } = this.state;
    if (matches) {
      return this.renameAllRows(matches);
    } else {
      return [];
    }
  }
 
  getOnClickFunction(index) {
    const { history, handleClick } = this.props;
    const { matches } = this.state;
    return () => {
      handleClick(matches, index, history);
    };
  }
  
  render() {
    const {
      classes,
      columns,
      isLoading,
      headline
    } = this.props;
    const { caption } = this.state;
    const data = this.getData();

    if(isLoading) {
      return <div className="SearchPage">
        <div className="loader">
          <Loader
            type='ThreeDots'
            color='#6839d3'
            height='75'
            width='75'
          />
        </div>
      </div>
    }

    return (
      <div className="SearchPage">
        <Grid container className={classes.root}>
          <Grid item xs={12}>
            <h1 className={classes.mainTitle}>{headline}</h1>
            <p className={classes.subtitle}>
              {caption}
            </p>
          </Grid>
          <Grid item xs={12}>
            <ReactTable
              defaultPageSize={20}
              minRows={2}
              data={data}
              columns={columns}
              className={`${classes.table} -striped`}
              page={this.state.page}
              onPageChange={page => {
                this.setState({ page })
                window.location.hash = "#" + (page + 1)
              }}
              noDataText="No results found"
              getTrProps={() => {
                return {
                  className: classes.modifyTr
                };
              }}
              getTheadProps={() => {
                return {
                  className: classes.modifyThead
                };
              }}
              getTheadThProps={() => {
                return {
                  className: classes.modifyTh
                };
              }}
              getTableProps={() => {
                return {
                  className: classes.modifyTable
                };
              }}
              getTbodyProps={() => {
                return {
                  className: classes.modifyTbody
                };
              }}
              getTdProps={() => {
                return {
                  className: classes.modifyTd
                };
              }}
              getTrGroupProps={(state, rowInfo) => {
                if (rowInfo && rowInfo.row) {
                  return {
                    className: classes.modifyGroupTr,
                    onClick: this.getOnClickFunction(rowInfo.index)
                  }
                }else{
                  return {}
                }
              }}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(withRouter(SearchResultsBody));
