import React from 'react';
import { shallow } from 'enzyme';
import PeopleSearchResults from './DataSearchResults';
import SearchResults, * as unconnectedSearchResults from './SearchResults';
import SidebarPage from 'sidebarPage/SidebarPage';
import { SearchResultsBody } from './SearchResultsBody';

describe('Clicking on data search result triggers a download', () => {
  it('Handler is passed as a prop to <SearchResults />', () => {
    const wrapper = shallow(<PeopleSearchResults />).dive();
    expect(wrapper.find(SearchResults).prop('handleClick')).toBe(
      wrapper.instance().handleClick
    );
  });

  it('Handler is passed as a prop to <SearchResults />', () => {
    const { SearchResults } = unconnectedSearchResults;
    const handleClickMock = jest.fn();
    delete window.location;
    window.location = { reload: jest.fn(), href: '???' };
    const wrapper = shallow(<SearchResults handleClick={handleClickMock} />);
    expect(
      wrapper.find(SidebarPage).prop('bodyContent').props.handleClick
    ).toBe(wrapper.instance().props.handleClick);
  });

  it('Click triggers a download', () => {
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

it('Click opens a subscribtion dialog', done => {
  const wrapper = shallow(<PeopleSearchResults />).dive();
  wrapper.instance().startDownload = jest.fn(() =>
    Promise.resolve({ data: {} })
  );
  delete window.open;
  window.open = jest.fn();
  expect.assertions(1);
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
