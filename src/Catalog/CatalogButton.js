import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { styles } from "Catalog/productCardStyles";
import { withRouter } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';

class CatalogButton extends React.Component {
    render() {
        const { classes, onClickTarget, buttonText, id } = this.props;
        return (<Grid item xs={5}>
            <Button
                className={classes.button}
                onClick={onClickTarget}
                id={id}
            >
                <span id={"span-" + id}>{buttonText}</span>
            </Button>
        </Grid>);
    }
}

export default withStyles(styles)(withRouter(CatalogButton));
