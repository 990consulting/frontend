import React from 'react';
import { shallow } from 'enzyme';
import { DatasetWrapper } from './DatasetWrapper';
import apiClient from 'App/ApiClient';

it('[Test #2] Clicking on "Download now" on a dataset page brings up a subscription dialog', done => {
  const wrapper = shallow(<DatasetWrapper children={jest.fn()} />);
  apiClient.doDownload = jest.fn(() => Promise.resolve('Success'));
  wrapper
    .instance()
    .handleDatasetDownload({ currentTarget: { id: '' } }, '')
    .then(() => {
      expect(wrapper.state().showSubscriptionDialog).toBeTruthy();
      done();
    });
});
