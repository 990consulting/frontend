import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

import withStyles from '@material-ui/core/styles/withStyles';
import SearchResults from 'searchResults/SearchResults';
import apiClient from 'App/ApiClient';
const styles = (theme) => ({});

function handleClick(matches, index, history) {
  const url = matches[index]['IRS Path'];
  apiClient.downloadIRSFile(url)
    .then(res => {
      window.open(res.data);
    });
}

class PeopleSearchResults extends React.Component {
  renameRow = dataItem => {
    return {
      relevance: dataItem['Relevance'],
      irsPath: dataItem['IRS Path'],
      irsDescription: dataItem['IRS Description'],
      dataType: dataItem['Data type'],
      form: dataItem['Form'],
      location: dataItem['Location'],
      earliest: dataItem['Earliest'],
      latest: dataItem['Latest']
    }
  };
  
  columns = [
      {
        id: 'relevance',
        Header: 'Relevance',
        accessor: d => <span data-label='Relevance'>{d['relevance']}</span>,
        maxWidth: 80,
        minWidth: 60,
        show: false
      },
      {
        id: 'irsPath',
        Header: 'IRS Path',
        accessor: d => <span data-label='IRS Path'>{d['irsPath']}</span>,
        maxWidth: 500,
        minWidth: 200
      },
      {
        id: 'irsDescription',
        Header: 'IRS Description',
        accessor: d => <span data-label='IRS Description'>{d['irsDescription']}</span>,
        maxWidth: 500,
        minWidth: 200
      },
      {
        id: 'dataType',
        Header: 'Data type',
        accessor: d => <span data-label='Data type'>{d['dataType']}</span>,
        maxWidth: 80,
        minWidth: 60
      },
      {
        id: 'form',
        Header: 'Form',
        accessor: d => <span data-label='Form'>{d['form']}</span>,
        maxWidth: 80,
        minWidth: 80
      },
      {
        id: 'location',
        Header: 'Location',
        accessor: d => <span data-label='Location'>{d['location']}</span>,
        maxWidth: 120,
        minWidth: 80
      },
      {
        id: 'earliest',
        Header: 'Earliest',
        accessor: d => <span data-label='Earliest'>{d['earliest']}</span>,
        maxWidth: 80,
        minWidth: 80
      },
      {
        id: 'latest',
        Header: 'Latest',
        accessor: d => <span data-label='Latest'>{d['latest']}</span>,
        maxWidth: 80,
        minWidth: 80
      }
  ];
  
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Download variables | Open990</title>
          <meta name="description" content="Thousands of data fields available for free csv download to those researching nonprofit finances." />
          <meta name="robots" content="all"/>
        </Helmet>
        <SearchResults
          fetchResults={apiClient.searchDataByQuery}
          columns={this.columns}
          renameRow={this.renameRow}
          handleClick={handleClick}
          headline="Nonprofit dataset downloads"
          sidebarTitle="Data search options"
        />
      </Fragment>
    )
  }
}

export default withStyles(styles)(PeopleSearchResults);