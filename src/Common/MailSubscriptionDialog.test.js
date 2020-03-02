import React from 'react';
import { shallow } from 'enzyme';
import { MailSubscriptionDialog } from './MailSubscriptionDialog';

const props = {
  downloadRef: '',
  classes: {},
  isOpen: true,
  datasetId: '',
  closeDialog: jest.fn()
};

const setupWrapper = (additionalProps = {}) => {
  const newProps = { ...props, ...additionalProps };
  return shallow(<MailSubscriptionDialog {...newProps} />);
};

const promiseMock = () => jest.fn(() => Promise.resolve('Success'));

describe('[Tests #5,6] Clicking "Keep me informed" inside the subscription dialog with a valid email address results in a call to MailChimp\'s API and closes the dialog', () => {
  const closeDialogMock = jest.fn();
  const wrapper = setupWrapper({ closeDialog: closeDialogMock });
  wrapper.instance().subscribeToMailingList = promiseMock();

  it('The dialog got closed', done => {
    wrapper
      .instance()
      .onSubmit('test@gmail.com')
      .then(() => {
        expect(closeDialogMock.mock.calls.length).toEqual(1);
        done();
      });
  });

  it('The click calls the API', () => {
    expect(wrapper.instance().subscribeToMailingList.mock.calls.length).toEqual(
      1
    );
  });
});

it('[Test #7] Clicking "Keep me informed" inside the subscription dialog with an invalid email address results in a message that the content is invalid', () => {
  const wrapper = setupWrapper();
  wrapper.find('#subscribe_').simulate('click');
  expect(wrapper.find('#email-warning').text().length).toBeTruthy();
});

describe('[Tests #8,9] Clicking "Keep me informed" inside the subscription dialog with an invalid email address doesn\'t result in closing the dialog and calling the mailchimp API', () => {
  const closeDialogMock = jest.fn();
  const wrapper = setupWrapper({ closeDialog: closeDialogMock });
  wrapper.find('#subscribe_').simulate('click');
  wrapper.instance().subscribeToMailingList = promiseMock();
  it("The click doesn't close the dialog", () => {
    expect(closeDialogMock.mock.calls.length).toEqual(0);
  });
  it("The click doesn't call the API", () => {
    expect(wrapper.instance().subscribeToMailingList.mock.calls.length).toEqual(
      0
    );
  });
});

describe('[Test #10] Clicking "No thanks" closes the dialog without making an API call', () => {
  const closeDialogMock = jest.fn();
  const wrapper = setupWrapper({ closeDialog: closeDialogMock });

  wrapper.instance().subscribeToMailingList = promiseMock();

  it('The click closes the dialog', () => {
    wrapper.find('#cancel-subscription-btn').simulate('click');
    expect(closeDialogMock.mock.calls.length).toEqual(1);
  });

  it("The API call didn't happen", () => {
    expect(wrapper.instance().subscribeToMailingList.mock.calls.length).toEqual(
      0
    );
  });
});

describe('[Test #10, 11] Clicking "No thanks" and outside of the dialog closes the dialog without making an API call', () => {
  const closeDialogMock = jest.fn();
  const wrapper = setupWrapper({ closeDialog: closeDialogMock });

  wrapper.instance().subscribeToMailingList = promiseMock();

  it('Clicking "No thanks" closes the dialog', () => {
    wrapper.find('#cancel-subscription-btn').simulate('click');
    expect(closeDialogMock.mock.calls.length).toEqual(1);
  });

  it('Clicking outside of the dialog closes the dialog', () => {
    closeDialogMock.mockClear();
    wrapper
      .find('[aria-labelledby="subscription-dialog-title"]')
      .props()
      .onClose();
    expect(closeDialogMock.mock.calls.length).toEqual(1);
  });

  it("The API call didn't happen", () => {
    expect(wrapper.instance().subscribeToMailingList.mock.calls.length).toEqual(
      0
    );
  });
});
