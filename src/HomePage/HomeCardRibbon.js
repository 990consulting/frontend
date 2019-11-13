/*
 * Copyright (c) 2018 Open990.org, Inc.. All rights reserved.
 */

import React from 'react';

import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';

import InfoCard from 'Common/InfoCard';
import MaxContainer from 'hoc/MaxContainer';

import {
  benchmark,
  customData,
  catalog
} from 'App/routes';

const styles = (theme) => ({
  container: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    padding: '8.5rem 0 5.5rem',
    backgroundColor: theme.color.background.faded,
    [theme.breakpoints.only('xs')]: {
      padding: '10.5rem 0 5.5rem',
      flexDirection: 'column',
    },
  },
  paper: {
    [theme.breakpoints.up('md')]: {
      height: '100%',
      minHeight: '14.875rem'
    }
  },
  maxContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center'
    },
    position: 'relative'
  },
  cardContent: {
    padding: '0 1rem 1rem',
    marginTop: '2rem',
    height: 'calc(100% - 3.5rem)',
    [theme.breakpoints.up('md')]: {
      '& a': {
        position: 'absolute',
        width: '100%',
        left: 0,
        bottom: '1rem',
      }
    }
  },
  text: {
    padding: '0 1.625rem 1.25rem',
    lineHeight: 1.41
  },
  cardsHeader: {
    fontFamily: theme.typography.fontFamily.heading,
    fontWeight: 700,
    fontSize: '1.5rem',
    [theme.breakpoints.down('xs')]: {
      fontSize: '2rem',
    },
    marginTop: '0px',
    marginBottom: '0px',
    position: 'absolute',
    top: '-5rem',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '86%',
    [theme.breakpoints.down(599)]: {
      width: '92%',
      top: '-7rem',
      fontSize: '1.5rem',
    },
    [theme.breakpoints.down(321)]: {
      width: '92%',
      top: '-7rem',
      fontSize: '1.5rem',
    }
  }
});

const HomeCardRibbon = ({
    classes
  }) => (
  <Grid
    item
    xs={12}
    className={classes.container}
  >
    <Grid item xs={12}>
      <MaxContainer classes={{
        container: classes.maxContainer
      }}>
        <h2 className={classes.cardsHeader}>
          Open990 provides free, searchable information about U.S. tax-exempt organizations over time.
        </h2>
        <Grid item>
          <InfoCard
            classes={{
              extendedCardContent: classes.cardContent,
              extendedText: classes.text,
              extendedPaper: classes.paper
            }}
            headerText={'OPEN990.ORG'}
            bodyText={['Is a new 501(c)(3) organization']}
            linkText={'Stay Tuned'}
            linkHref="#"
          />
        </Grid>
        <Grid item>
          <InfoCard
            classes={{
              extendedCardContent: classes.cardContent,
              extendedText: classes.text,
              extendedPaper: classes.paper
            }}
            headerText={'TAXPAYER FIRST ACT'}
            bodyText={['New law mandates electronic filing of nonprofit tax returns']}
            linkText={'Learn More'}
            extHref="https://www.aspeninstitute.org/blog-posts/new-law-brings-overdue-changes-to-nonprofit-tax-filings-form-990/"
          />
        </Grid>
        <Grid item>
          <InfoCard
            classes={{
              extendedCardContent: classes.cardContent,
              extendedText: classes.text,
              extendedPaper: classes.paper
            }}
            headerText={'SNACK-SIZED DATASETS'}
            bodyText={['For noncommercial use']}
            linkText={'Learn more'}
            linkHref={catalog}
          />
        </Grid>
    </MaxContainer>
    </Grid>

  </Grid>
);

export default withStyles(styles)(HomeCardRibbon);
