/*
 * Copyright (c) 2019 Open990.org, Inc.. All rights reserved.
 */

import React from 'react';

import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';

import InfoCard from 'Common/InfoCard';
import MaxContainer from 'hoc/MaxContainer';

import { foundationsAndGrants, executiveCompensation } from 'App/routes';

const styles = theme => ({
  container: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    padding: '8.5rem 0 5.5rem',
    backgroundColor: theme.color.background.faded,
    [theme.breakpoints.only('xs')]: {
      padding: '10.5rem 0 5.5rem',
      flexDirection: 'column'
    }
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
    display: 'flex',
    padding: '0 1rem 1rem',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%'
  },
  text: {
    padding: '0 1.625rem',
    lineHeight: 1.41,
    '& p': {
      margin: 0
    }
  },
  cardsHeader: {
    fontFamily: theme.typography.fontFamily.heading,
    fontWeight: 700,
    fontSize: '1.5rem',
    [theme.breakpoints.down('xs')]: {
      fontSize: '2rem'
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
      fontSize: '1.5rem'
    },
    [theme.breakpoints.down(321)]: {
      width: '92%',
      top: '-7rem',
      fontSize: '1.5rem'
    }
  },
  link: {
    marginBottom: '1.5rem',
    [theme.breakpoints.down('sm')]: {
      margin: '1rem 0 0'
    }
  }
});

const HomeCardRibbon = ({ classes }) => (
  <Grid item xs={12} className={classes.container}>
    <Grid item xs={12}>
      <MaxContainer
        classes={{
          container: classes.maxContainer
        }}
      >
        <h2 className={classes.cardsHeader}>
          Open990 provides free, searchable information about U.S. tax-exempt
          organizations over time.
        </h2>
        <Grid item>
          <InfoCard
            classes={{
              extendedCardContent: classes.cardContent,
              extendedText: classes.text,
              extendedPaper: classes.paper,
              extendedLink: classes.link
            }}
            headerText={'EXECUTIVE COMPENSATION DATASET'}
            bodyText={[
              "The most in-depth compensation dataset based on IRS data -- and it's free!"
            ]}
            linkText={'Learn more'}
            linkHref={executiveCompensation}
          />
        </Grid>
        <Grid item>
          <InfoCard
            classes={{
              extendedCardContent: classes.cardContent,
              extendedText: classes.text,
              extendedPaper: classes.paper,
              extendedLink: classes.link
            }}
            headerText={'FOUNDATIONS DATA'}
            bodyText={[
              'Streamline your nonprofit grant search with this free dataset.'
            ]}
            linkText={'Learn more'}
            linkHref={foundationsAndGrants}
          />
        </Grid>
        <Grid item>
          <InfoCard
            classes={{
              extendedCardContent: classes.cardContent,
              extendedText: classes.text,
              extendedPaper: classes.paper,
              extendedLink: classes.link
            }}
            headerText={'TAXPAYER FIRST ACT'}
            bodyText={[
              'New law mandates electronic filing of nonprofit tax returns'
            ]}
            linkText={'Learn More'}
            extHref="https://www.aspeninstitute.org/blog-posts/new-law-brings-overdue-changes-to-nonprofit-tax-filings-form-990/"
          />
        </Grid>
      </MaxContainer>
    </Grid>
  </Grid>
);

export default withStyles(styles)(HomeCardRibbon);
