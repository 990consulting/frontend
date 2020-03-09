import React from 'react';
import { shallow } from 'enzyme';
import { OrganizationProfile } from './OrgProfile';
import apiClient from 'App/ApiClient';

it('Scroll to "Human resources & compensation" if pid parameter presents', done => {
  const props = {
    classes: {
      loaderWrapper: jest.fn()
    },
    match: {
      params: {}
    },
    history: {
      location: { pathname: {} },
      replace: jest.fn()
    },
    location: {
      search: '?pid=xyz'
    }
  };
  apiClient.getOrgSkeleton = jest.fn(() =>
    Promise.resolve({ data: { meta: { canonical: {} } } })
  );
  const wrapper = shallow(<OrganizationProfile {...props} />);
  wrapper.instance().scrollToHumanResources = jest.fn();
  wrapper
    .instance()
    .componentDidMount()
    .then(() => {
      expect(wrapper.instance().scrollToHumanResources).toHaveBeenCalled();
      done();
    });
});
