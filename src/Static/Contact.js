/*
 * Copyright (c) 2019 Open990.org, Inc. All rights reserved.
 */

import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import MaxContainer from 'hoc/MaxContainer';
import classNames from 'classnames';

import kugelmass from 'assets/kugelmass.jpg';
import borenstein from 'assets/borenstein.jpg';

import faGit from '@fortawesome/fontawesome-free-brands/faGit';
import faLinkedin from '@fortawesome/fontawesome-free-brands/faLinkedin';
import faEnvelope from '@fortawesome/fontawesome-free-solid/faEnvelope';

import {
  mail,  
  davidMail,
  heatherMail,  
  broadinstitute,
  charitynavigator,
  charitynavigatorNineHundr,
  princeton,
  borensteinGit,
  borensteinLinkedIn,      
  kugelmassLinkedIn
} from 'App/routes';

const styles = (theme) => ({
  root: {
    ...theme.open990.pageContainer,
    padding: '0 1.75rem 1.75rem'
  },
  policyHeader: {
    ...theme.open990.pageTitle,
    margin: '1rem 0'
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  headingContent: {
    '& a': {
      ...theme.open990.link,
      fontSize: '1.5rem',
      textDecoration: 'none',
    }
  },
  staticMainContent: {
    ...theme.open990.pageContent,
    [theme.breakpoints.up('md')]: {
      paddingTop: '2rem'
    },
    '& a': {
      ...theme.open990.link,
      textDecoration: 'none',
    },
    '& h2': {
      textAlign: 'center',
      fontFamily: theme.typography.fontFamily.main,
      fontWeight: 600,
      fontSize: '1.875rem',
      margin: 0,
    },
  },
  chapterTitle: {
    fontWeight: 600
  },
  contact: {
    fontWeight: 600
  },
  textContent: {
    fontSize: '1.25rem',
    fontWeight: 300,
    lineHeight: 'normal',
    maxWidth: '42rem',
    textAlign: 'center',
    margin: '1.875rem auto 0 auto',
    
  },
  foundersProfile: {
    padding: '0 5rem',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      padding: '2rem 0'
    },
    '& img': {
      maxWidth: '15.75rem',
      [theme.breakpoints.down('xs')]: {
        maxWidth: '100%',
      }
    },
    '& p': {
      textAlign: 'justify',
      lineHeight: 1.8,
      margin: '0.5rem 0 1.875rem 0',
      fontSize: '1rem',
      fontFamily: theme.typography.fontFamily.main,
      
    },
    '& h4': {
      margin: '1.25rem 0 0.3125rem 0',
      fontSize: '1.1875rem',
      fontWeight: 700,
      fontFamily: theme.typography.fontFamily.main,
    },
    '& span': {
      fontFamily: theme.typography.fontFamily.main,
      color: theme.color.primary.original,
      fontWeight: 400,
      fontStyle: 'italic',
      fontSize: '0.9375rem',
    },
    '& a': {
      ...theme.open990.link,
      textDecoration: 'none'
    },
  },
  brandIcon: {
    margin: '0 0.25rem',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.color.grey.faded,
    color: theme.color.grey.desaturated,
    borderRadius: '50%',
    width: '2rem',
    height: '2rem',
    transition: '0.3s ease',
    '& svg': {
      fontSize: '1rem',
      lineHeight: '2rem',
      transition: '0.3s ease'
    },
    '&:hover': {
      backgroundColor: theme.color.primary.desaturated,
      transition: '0.3s ease',
      '& svg': {
        color: theme.color.white,
        lineHeight: '2rem',
        transition: '0.3s ease'
      }
    }
  },
  bigHeadline: {
    fontSize: "2em"
  }
});

const Contact = ({
                   classes,
                 }) => {
  return (
    <Fragment>
      <Helmet>
        <title>Contact Open990</title>
        <meta name="description" content="Researchers, nonprofit professionals, fundraising consultants, journalists, donors...Welcome to Open990." />
        <meta name="robots" content="all"/>
        <link rel="canonical" href="https://www.open990.org/contact/" />
      </Helmet>
      <div className={classNames(
        'ContactPage',
        classes.root
      )}>
        <MaxContainer classes={{ container: classes.container }}>
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={12}>
                <Grid container justify="center">
                  <Grid item xs={12} md={10} className={classes.policyHeader}>
                    <h1>Contact us</h1>
                  </Grid>
                  <Grid item xs={12} className={classes.headingContent}>
                    <a href={mail}>
                      inquiries@open990.org
                    </a>
                    <p className={classes.textContent}>Researchers, nonprofit professionals, fundraising consultants, journalists, donors...welcome! Your input guides what variables we display from the data we acquire from <a target="_blank" rel="noopener noreferrer" href="https://appliednonprofitresearch.com"> Applied Nonprofit Research</a>. Not seeing what you need? Drop us a line.
                    </p>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12}>
                <Grid container justify="center">
                  <Grid item xs={12} md={10} className={classes.policyHeader}>
                    <h2 className={classes.bigHeadline}>Our founders</h2>
                  </Grid>

                  <Grid item xs={12} md={5}>
                    <div className={classes.staticMainContent}>
                      <div className={classes.foundersProfile}>
                        <img src={kugelmass} alt="kugelmass"/>
                        <h4>Heather Kugelmass, Ph.D.</h4>
                        <span>Director of Research</span>
                        <p>Heather earned a Ph.D. in Sociology from Princeton University, where she was
                          a research affiliate of the Center for the Study of Social Organization and a graduate student
                          fellow of the Woodrow Wilson Scholars. Prior to her doctoral work, she was a program manager at a
                          nonprofit that provides assessment tools to colleges.
                          She is a partner at <a target="_blank" rel="noopener noreferrer" href="https://appliednonprofitresearch.com"> Applied Nonprofit Research</a>, which donates its data feed to Open990.
                          Heather also holds an M.A. in Quantitative
                          Methods in the Social Sciences from Columbia University.</p>

                        <div>
                          <a href={kugelmassLinkedIn}>
                            <div className={classes.brandIcon}>
                              <FontAwesomeIcon icon={faLinkedin}/>
                            </div>
                          </a>
                          <a href={heatherMail}>
                            <div className={classes.brandIcon}>
                              <FontAwesomeIcon icon={faEnvelope}/>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </Grid>

                  <Grid item xs={12} md={5}>
                    <div className={classes.staticMainContent}>
                      <div className={classes.foundersProfile}>
                        <img src={borenstein} alt="borenstein"/>
                        <h4>David Bruce Borenstein, Ph.D.</h4>
                        <span>Chief Technology Officer</span>
                        <p>David is an expert in data engineering and ETL with a data science background. Formerly the Director of Data
                          Science at <a href={charitynavigator}>Charity Navigator</a>, he created
                          open-source <a href={charitynavigatorNineHundr}>software</a> to turn the IRS Form 990 into
                          spreadsheets.
                          Prior to Charity Navigator, he worked as a computational biologist at the <a
                              href={broadinstitute}>Broad Institute of MIT and Harvard</a>. He is also the founder of
                          <a target="_blank" rel="noopener noreferrer" href="https://appliednonprofitresearch.com"> Applied Nonprofit Research</a>, which donates
                          its data feed to Open990. He holds a Ph.D.
                          in
                          Quantitative and Computational Biology from <a
                              href={princeton}>Princeton
                            University.</a></p>

                        <div>
                          <a href={borensteinGit}>
                            <div className={classes.brandIcon}>
                              <FontAwesomeIcon icon={faGit}/>
                            </div>
                          </a>
                          <a href={borensteinLinkedIn}>
                            <div className={classes.brandIcon}>
                              <FontAwesomeIcon icon={faLinkedin}/>
                            </div>
                          </a>
                          <a href={davidMail}>
                            <div className={classes.brandIcon}>
                              <FontAwesomeIcon icon={faEnvelope}/>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </Grid>

                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </MaxContainer>
      </div>
    </Fragment>
  )
};

export default withStyles(styles)(Contact);

