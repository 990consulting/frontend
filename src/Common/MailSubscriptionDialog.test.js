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

describe('"Keep me informed" with a valid email address calls the API', () => {
  it('"Keep me informed" triggers subscription', () => {
    const wrapper = setupWrapper();
    wrapper.instance().onSubmit = jest.fn();
    wrapper.find('#subscribe_').simulate('click');
    expect(wrapper.instance().onSubmit.mock.calls.length).toEqual(1);
  });

  it('Subscriptios happens with a valid email + closing the dialog', done => {
    const closeDialogMock = jest.fn();
    const wrapper = setupWrapper({ closeDialog: closeDialogMock });
    wrapper.instance().subscribeToMailingList = promiseMock();
    expect.assertions(2);
    wrapper
      .instance()
      .onSubmit('test@gmail.com')
      .then(() => {
        expect(closeDialogMock.mock.calls.length).toEqual(1);
        done();
      });
    expect(wrapper.instance().subscribeToMailingList.mock.calls.length).toEqual(
      1
    );
  });
});

it('Show a message if email is invalid', () => {
  const wrapper = setupWrapper();
  wrapper.find('#subscribe_').simulate('click');
  expect(wrapper.find('#email-warning').text().length).toBeTruthy();
});

it("Invalid email address doesn't close the dialog and call the API", () => {
  const closeDialogMock = jest.fn();
  const wrapper = setupWrapper({ closeDialog: closeDialogMock });
  wrapper.find('#subscribe_').simulate('click');
  wrapper.instance().subscribeToMailingList = promiseMock();
  expect(closeDialogMock.mock.calls.length).toEqual(0);
  expect(wrapper.instance().subscribeToMailingList.mock.calls.length).toEqual(
    0
  );
});

describe('Dialog gets closed without calling the API', () => {
  const closeDialogMock = jest.fn();
  const wrapper = setupWrapper({ closeDialog: closeDialogMock });

  wrapper.instance().subscribeToMailingList = promiseMock();

  it('"No thanks" button click closes the dialog', () => {
    wrapper.find('#cancel-subscription-btn').simulate('click');
    expect(wrapper.instance().subscribeToMailingList.mock.calls.length).toEqual(
      0
    );
    expect(closeDialogMock.mock.calls.length).toEqual(1);
  });

  it('Click outside of the dialog window closes the dialog', () => {
    closeDialogMock.mockClear();
    wrapper
      .find('[aria-labelledby="subscription-dialog-title"]')
      .props()
      .onClose();
    expect(wrapper.instance().subscribeToMailingList.mock.calls.length).toEqual(
      0
    );
    expect(closeDialogMock.mock.calls.length).toEqual(1);
  });
});
