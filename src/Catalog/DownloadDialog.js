import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import apiClient from 'App/ApiClient';

class DownloadDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {open: false, email: null}
    }

    subscribeAndDownload() {
        const {filename} = this.props;
        const {email} = this.state;
        // TODO Add email address validation
        apiClient.subscribeToMailingList(email)
            .then(res => apiClient.doDownload(filename));
        this.setState({open: false})
    } 

    handleClickOpen() {
        this.setState({open: true});
    }

    downloadWithoutSubscribing() {
        const {filename} = this.props;
        apiClient.doDownload(filename);
        this.setState({open: false})
    }

    setEmailAddress(value) {
        this.setState({email: value});
    }

    render() {
        const {baseId, filename, title} = this.props;
        const {open} = this.state;
        return(
            <Dialog open={open}>
                <DialogTitle>Download {title}</DialogTitle>
                <DialogContent>
                    <DialogContentText>To be notified when Open990 adds new data, enter your email address here.</DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="email"
                        label="Email Address"
                        type="email"
                        fullWidth
                        onChange={evt => this.setEmailAddress(evt.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.subscribeAndDownload} color="primary">
                        Subscribe and download
                    </Button>
                    <Button onClick={this.downloadWithoutSubscribing} color="secondary">
                        Download without subscribing
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}