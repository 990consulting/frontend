/*
 * Copyright (c) 2019 Open990.org, Inc.. All rights reserved.
 */

import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

import withStyles from '@material-ui/core/styles/withStyles';
import SearchResults from 'searchResults/SearchResults';
import apiClient from 'App/ApiClient';
const styles = (theme) => ({});

function handleClick(matches, index, history) {
  const ein = matches[index]['EIN'];
  history.push(`/org/${ein}`);
}

class OrgSearchResults extends React.Component {
  renameRow = dataItem => {
    return {
      name: dataItem['Name'],
      ein: dataItem['EIN'],
      city: dataItem['City'],
      state: dataItem['State'],
      totalAssets: dataItem['Total assets']
    }
  };
  
  columns = [
    {
      id: 'name',
      Header: 'Name',
      accessor: d => <span data-label='Name'>{d.name}</span>,
      maxWidth: 777,
      minWidth: 400
    },
    {
      id: 'ein',
      Header: 'EIN',
      accessor: d => <span data-label='EIN'>{d.ein}</span>,
      maxWidth: 150,
      minWidth: 100
    },
    {
      id: 'city',
      Header: 'City',
      accessor: d => <span data-label='City'>{d.city}</span>,
      maxWidth: 230,
      minWidth: 100
    },
    {
      id: 'state',
      Header: 'State',
      accessor: d => <span data-label='State'>{d.state}</span>,
      maxWidth: 130,
      minWidth: 50
      
    },
    {
      id: 'total-assets',
      Header: 'Total assets',
      accessor: d => <span data-label='Total assets'>{d.totalAssets}</span>,
      maxWidth: 150,
      minWidth: 100
    }
  ];
  
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Nonprofit search results | Open990</title>
          <meta name="description" content="Search results for U.S. charities, foundations, and other nonprofits. Open990 is a free resource for public information on more than 1 million nonprofits." />
          <meta name="robots" content="all"/>
        </Helmet>
        <SearchResults
          fetchResults={apiClient.searchOrganizationsWithParams}
          columns={this.columns}
          renameRow={this.renameRow}
          handleClick={handleClick}
          headline="Nonprofit organization search"
          sidebarTitle="Org search options"
        />
      </Fragment>
    )
  }
}

export default withStyles(styles)(OrgSearchResults);