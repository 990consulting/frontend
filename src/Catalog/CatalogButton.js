import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { styles } from "Catalog/productCardStyles";
import { withRouter } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';
import {inquiriesMail} from "App/routes";

class CatalogButton extends React.Component {
    render() {
        const { classes, onClickTarget, buttonText } = this.props;
        return (<Grid item xs={5}>
            <Button
                className={classes.button}
                onClick={onClickTarget}
            >
                {buttonText}
            </Button>
        </Grid>);
    }
}

export default withStyles(styles)(withRouter(CatalogButton));
