import React from 'react';
import { shallow } from 'enzyme';
import DatasetWrapper, * as unconnectedDatasetWrapper from './DatasetWrapper';
import { ContractorCompensation } from './Pages/ContractorCompensation';
import { ExecutiveCompensation } from './Pages/ExecutiveCompensation';
import { FoundationsAndGrants } from './Pages/FoundationsAndGrants';
import { NonprofitGovernance } from './Pages/NonprofitGovernance';
import apiClient from 'App/ApiClient';

const datasetPages = [
  {
    PageComponent: ContractorCompensation,
    pageName: 'Contractor Compensation',
    buttonId: 'landingpage-download-contractor'
  },
  {
    PageComponent: ExecutiveCompensation,
    pageName: 'Executive Compensation',
    buttonId: 'landingpage-download-executive'
  },
  {
    PageComponent: FoundationsAndGrants,
    pageName: 'Foundations And Grants',
    buttonId: 'landingpage-download-foundation'
  },
  {
    PageComponent: NonprofitGovernance,
    pageName: 'Nonprofit Governance',
    buttonId: 'landingpage-download-governance'
  }
];

describe('[Test #1] Clicking on Dataset Pages download button & donwload link triggers a download', () => {
  datasetPages.map(page => {
    const { PageComponent, pageName, buttonId } = page;
    const wrapper = shallow(<PageComponent classes={{ root: '' }} />);
    const onDatasetDownload = jest.fn();
    const insideLayout = shallow(
      wrapper.find(DatasetWrapper).prop('children')(onDatasetDownload)
    );
    it(`Clicking on download button triggers a download on ${pageName}`, () => {
      insideLayout.find(`#${buttonId}-button`).simulate('click');
      expect(onDatasetDownload.mock.calls.length).toEqual(1);
    });
    it(`Clicking on download link triggers a download on ${pageName}`, () => {
      insideLayout.find(`#${buttonId}-link`).simulate('click');
      expect(onDatasetDownload.mock.calls.length).toEqual(2);
    });
  });
});

it('[Test #2] Clicking on "Download now" on a dataset page brings up a subscription dialog', done => {
  const { DatasetWrapper } = unconnectedDatasetWrapper;
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
