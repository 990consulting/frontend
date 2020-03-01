import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';

import apiClient from 'App/ApiClient';
import MailSubscriptionDialog from 'Common/MailSubscriptionDialog';

export class DatasetWrapper extends Component {
  state = {
    datasetId: '',
    datasetDownloadRef: '',
    showSubscriptionDialog: false
  };

  handleDatasetDownload = (event, downloadRef) => {
    const datasetId = event.currentTarget.id;
    return apiClient
      .doDownload(downloadRef)
      .then(() => this.openSubscriptionDialog(datasetId, downloadRef));
  };

  openSubscriptionDialog = (datasetId, downloadRef) =>
    this.setState({
      datasetId,
      datasetDownloadRef: downloadRef,
      showSubscriptionDialog: true
    });

  handleCloseSubscriptionDialog = () => {
    this.setState({ showSubscriptionDialog: false });
  };

  render() {
    return (
      <Fragment>
        <MailSubscriptionDialog
          isOpen={this.state.showSubscriptionDialog}
          datasetId={this.state.datasetId}
          downloadRef={this.state.datasetDownloadRef}
          closeDialog={this.handleCloseSubscriptionDialog}
        />
        {this.props.children(this.handleDatasetDownload)}
      </Fragment>
    );
  }
}

export default withRouter(DatasetWrapper);
