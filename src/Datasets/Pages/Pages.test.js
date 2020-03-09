import React from 'react';
import { shallow } from 'enzyme';
import DatasetWrapper from '../DatasetWrapper';
import { ContractorCompensation } from './ContractorCompensation';
import { ExecutiveCompensation } from './ExecutiveCompensation';
import { FoundationsAndGrants } from './FoundationsAndGrants';
import { NonprofitGovernance } from './NonprofitGovernance';

const testDownloadFunctionality = (PageComponent, id, pageName = 'untitled') => {
  const wrapper = shallow(<PageComponent classes={{ root: '' }} />);
  const onDatasetDownload = jest.fn();
  const insideLayout = shallow(
    wrapper.find(DatasetWrapper).prop('children')(onDatasetDownload)
  );
  it(`Clicking on download button triggers a download on ${pageName} page`, () => {
    insideLayout.find(`#${id}-button`).simulate('click');
    expect(onDatasetDownload.mock.calls.length).toEqual(1);
  });
  it(`Clicking on download link triggers a download on ${pageName} page`, () => {
    onDatasetDownload.mockClear();
    insideLayout.find(`#${id}-link`).simulate('click');
    expect(onDatasetDownload.mock.calls.length).toEqual(1);
  });
};

describe('[Test #1] Clicking on Dataset Pages download button & donwload link triggers a download', () => {
  testDownloadFunctionality(
    ContractorCompensation,
    'landingpage-download-contractor',
    'Contractor Compensation'
  );
  
  testDownloadFunctionality(
    ExecutiveCompensation,
    'landingpage-download-executive',
    'Executive Compensation'
  );

  testDownloadFunctionality(
    FoundationsAndGrants,
    'landingpage-download-foundation',
    'Foundations And Grants'
  );

  testDownloadFunctionality(
    NonprofitGovernance,
    'landingpage-download-governance',
    'Nonprofit Governance'
  );
});
