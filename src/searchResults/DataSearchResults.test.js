import React from 'react';
import { shallow } from 'enzyme';
import PeopleSearchResults from './DataSearchResults';
import SearchResults, * as unconnectedSearchResults from './SearchResults';
import SidebarPage from 'sidebarPage/SidebarPage';
import { SearchResultsBody } from './SearchResultsBody';
import apiClient from 'App/ApiClient';

describe('[Test #3] Clicking on a data search result triggers a download', () => {
  it('A click handler is passed as a prop to <SearchResults /> component', () => {
    const wrapper = shallow(<PeopleSearchResults />).dive();
    expect(wrapper.find(SearchResults).prop('handleClick')).toBe(
      wrapper.instance().handleClick
    );
  });

  it('The click handler is passed as a prop to <SearchResultsBody /> component', () => {
    const { SearchResults } = unconnectedSearchResults;
    const handleClickMock = jest.fn();
    delete window.location;
    window.location = { reload: jest.fn(), href: '???' };
    const wrapper = shallow(<SearchResults handleClick={handleClickMock} />);
    expect(
      wrapper.find(SidebarPage).prop('bodyContent').props.handleClick
    ).toBe(wrapper.instance().props.handleClick);
  });

  it('The click actually triggers the download', () => {
    const props = {
      history: {
        location: {
          hash: ''
        }
      },
      renameRow: jest.fn(),
      classes: {},
      handleClick: jest.fn(),
      fetchResults: jest.fn(() =>
        Promise.resolve({
          data: {
            caption: '',
            matches: '',
            params: ''
          }
        })
      )
    };
    const wrapper = shallow(<SearchResultsBody {...props} />);
    wrapper.instance().getOnClickFunction(1)();
    expect(props.handleClick.mock.calls.length).toEqual(1);
  });
});

it('[Test #4] Clicking on a data search result brings up a subscription dialog', done => {
  const wrapper = shallow(<PeopleSearchResults />).dive();
  apiClient.downloadIRSFile = jest.fn(() => Promise.resolve({ data: {} }));
  delete window.open;
  window.open = jest.fn();
  wrapper
    .instance()
    .handleClick([{ 'IRS Path': '' }], 0, {})
    .then(() => {
      wrapper.update();
      expect(
        wrapper.find('[datasetId="dataset-search-download"]').prop('isOpen')
      ).toBeTruthy();
      done();
    });
});
