/*
 * Copyright (c) 2019 Open990.org, Inc.. All rights reserved.
 */

import React, { Fragment} from 'react';
import SidebarPage from 'sidebarPage/SidebarPage';
import SearchResultsBody from 'searchResults/SearchResultsBody';
import { withRouter } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';
import { styles } from 'searchResults/searchStyles';
import SearchParams from './SearchParams'
//import apiClient from 'App/ApiClient';

export class SearchResults extends React.Component {

  state = {
    isLoading: null,
    popoverClosed: false
  };

  fetchResults = (search) => {
    const { fetchResults } = this.props;

    this.setState({ isLoading: true });
    //console.log("Fetching results");

    return fetchResults(search).then(response => {
      //console.log("Fetched results");
      this.setState({ isLoading: false });
      return response
    })
  };

  focusOnSidebar = () => {
    this.setState({ popoverClosed: true });
    if(!document.getElementById("search-params")) {
      document.querySelector("svg[data-icon=bars]").parentElement.click()
    }
    setTimeout(() => {
      if(!document.querySelector("#search-params input")) {
        document.querySelector("svg[data-icon=bars]").parentElement.click();
        setTimeout(() => {
          document.querySelector("#search-params input").focus()
        }, 10)
      } else {
        document.querySelector("#search-params input").focus()
      }
    }, 10)
  }
  
  render() {
    const { columns, renameRow, handleClick, headline } = this.props;
    const sidebarContent = (<Fragment>
      <SearchParams
          onClick={() => this.setState({popoverClosed: true})}
          onQueryMade={() => this.setState({popoverClosed: false})}
          fetchResults={this.props.fetchResults}
          sidebarTitle={this.props.sidebarTitle}
      />
    </Fragment>);

    const hasFilters = window.location.href.includes("?");

    const bodyContent = hasFilters ? <SearchResultsBody
      columns={columns}
      fetchResults={this.fetchResults}
      isLoading={this.state.isLoading}
      renameRow={renameRow}
      handleClick={handleClick}
      headline={headline}
    /> : <div style={{
      width: '100%',
      paddingTop: '15%',
      paddingBottom: '15%',
      display: this.state.popoverClosed ? 'none' : 'block'
    }} className="search-helper-container">
            <div style={{
                    padding: '20px', 
                    background: 'white', 
                    borderRadius: '10px', 
                    boxShadow: '0px 1px 17px 0px grey', 
                    maxWidth: '480px',
                    display: 'inline-block'
                }}>
              Please select your search parameters in the <a href="/#" onClick={this.focusOnSidebar}>sidebar</a> on the left.
            </div>
            <div className="bg"  onClick={() => this.setState({popoverClosed: true})}/>
    </div>



    return (<SidebarPage
      sidebarContent={sidebarContent}
      bodyContent={bodyContent}
    />);
  }
}

export default withStyles(styles)(withRouter(SearchResults));
