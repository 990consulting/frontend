import React from 'react';
import { shallow } from 'enzyme';
import DatasetWrapper, * as unconnectedDatasetWrapper from './DatasetWrapper';
import { ContractorCompensation } from './Pages/ContractorCompensation';
import { ExecutiveCompensation } from './Pages/ExecutiveCompensation';
import { FoundationsAndGrants } from './Pages/FoundationsAndGrants';
import { NonprofitGovernance } from './Pages/NonprofitGovernance';

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

describe('Dataset Pages download button click tests', () => {
  datasetPages.map(page => {
    const { PageComponent, pageName, buttonId } = page;
    it(`Download button triggers a download on ${pageName}`, () => {
      const wrapper = shallow(<PageComponent classes={{ root: '' }} />);
      const onDatasetDownload = jest.fn();
      const insideLayout = shallow(
        wrapper.find(DatasetWrapper).prop('children')(onDatasetDownload)
      );
      insideLayout.find(`#${buttonId}-button`).simulate('click');
      expect(onDatasetDownload.mock.calls.length).toEqual(1);
      insideLayout.find(`#${buttonId}-link`).simulate('click');
      expect(onDatasetDownload.mock.calls.length).toEqual(2);
    });
  });
});

it('Download triggers a subscription dialog', done => {
  const { DatasetWrapper } = unconnectedDatasetWrapper;
  const wrapper = shallow(<DatasetWrapper children={jest.fn()} />);
  wrapper.instance().startDownload = jest.fn(() => Promise.resolve('Success'));
  expect.assertions(1);
  wrapper
    .instance()
    .handleDatasetDownload({ currentTarget: { id: '' } }, '')
    .then(() => {
      expect(wrapper.state().showSubscriptionDialog).toBeTruthy();
      done();
    });
});
