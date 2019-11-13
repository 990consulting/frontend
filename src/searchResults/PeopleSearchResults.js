import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

import withStyles from '@material-ui/core/styles/withStyles';
import SearchResults from 'searchResults/SearchResults';
import apiClient from 'App/ApiClient';
const styles = (theme) => ({});

function handleClick(matches, index, history) {
  const url = matches[index]['_url'];
  history.push(url);
}

class PeopleSearchResults extends React.Component {
  renameRow = dataItem => {
    return {
      link: dataItem['_url'],
      name: dataItem['Name'],
      title: dataItem['Title'],
      organization: dataItem['Organization'],
      compensation: dataItem['Compensation']
    }
  };
  
  columns = [
    {
      id: 'name',
      Header: 'Name',
      accessor: d => <span data-label='Name'>{d.name}</span>,
      maxWidth: 300,
      minWidth: 150
    },
    {
      id: 'title',
      Header: 'Title',
      accessor: d => <span data-label='Title'>{d.title}</span>,
      maxWidth: 300,
      minWidth: 200
    },
    {
      id: 'organization',
      Header: 'Organization',
      accessor: d => <span data-label='Organization'>{d.organization}</span>,
      maxWidth: 590,
      minWidth: 300
    },
    {
      id: 'compensation',
      Header: 'Compensation',
      accessor: d => <span data-label='Compensation'>{d.compensation}</span>,
      maxWidth: 250,
      minWidth: 80
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
          fetchResults={apiClient.searchPeopleWithParams}
          columns={this.columns}
          renameRow={this.renameRow}
          handleClick={handleClick}
          headline="Nonprofit personnel search results"
          sidebarTitle="People search options"
        />
      </Fragment>
    )
  }
}

export default withStyles(styles)(PeopleSearchResults);