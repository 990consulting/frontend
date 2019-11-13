import React from 'react';
import Grid from '@material-ui/core/Grid';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import faInfoCircle from '@fortawesome/fontawesome-free-solid/faInfoCircle';

import { styles } from 'orgProfile/marqueeCardStyles';
import withStyles from '@material-ui/core/styles/withStyles';

class OrgProfileAlert extends React.Component {
  render() {
    const { classes, message } = this.props;
    return (<Grid item xs={12} md={6}>
      <Grid container className={classes.absentWrapper}>
        <Grid item xs={12} sm={1} className={classes.iconWrapper}>
          <FontAwesomeIcon icon={faInfoCircle} />
        </Grid>
        <Grid item xs={12} sm={11}>
          <p>{message}</p>
        </Grid>
      </Grid>
    </Grid>);
  }
}

export default withStyles(styles)(OrgProfileAlert);
