import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { styles } from "Catalog/productCardStyles";
import { withRouter } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';
import {inquiriesMail} from "App/routes";

class ContactUsButton extends React.Component {
    render() {
        const { classes } = this.props;
        return (<Grid item xs={5}>
            <Button className={classes.button} >
                <a href={inquiriesMail}>
                    Contact Open990
                </a>
            </Button>
        </Grid>);
    }
}

export default withStyles(styles)(withRouter(ContactUsButton));
