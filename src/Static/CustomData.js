/*
 * Copyright (c) 2020 Open990.org, Inc. All rights reserved.
 */

import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

import classNames from 'classnames';

import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';

import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { faCogs } from '@fortawesome/free-solid-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

import MaxContainer from 'hoc/MaxContainer';
import ContactForm from 'Common/ContactForm';
import IconCard from 'Common/IconCard';

const styles = theme => ({
  root: {
    ...theme.open990.pageContainer
  },
  underlinedHeader: {
    margin: '0 0 1.875rem 0',
    padding: 0,
    '& h3': {
      padding: '0 0 0.625rem',
      margin: 0,
      borderBottom: `2px solid ${theme.color.primary.desaturated}`,
      fontSize: '1.5rem',
      letterSpacing: '0.033rem',
      '& > span': {
        '& span': {
          margin: '0 1rem'
        },
        [theme.breakpoints.down(1000)]: {
          '&:last-child': {
            display: 'block'
          }
        },
        [theme.breakpoints.down(645)]: {
          '&': {
            display: 'block'
          }
        },
        [theme.breakpoints.down(360)]: {
          '& span': {
            margin: '0 0.3rem'
          }
        }
      },
      [theme.breakpoints.down(360)]: {
        '&': {
          fontSize: '1.4rem'
        }
      }
    }
  },
  featuresElement: {
    border: `1px solid ${theme.color.grey.standard}`,
    borderRadius: '5px',
    padding: '4.25rem 0 3.25rem 0',
    position: 'relative',
    '& svg': {
      position: 'absolute',
      fontSize: '2.625rem',
      top: '-48px',
      left: '50%',
      margin: '0 0 0 -48px',
      border: `1px solid ${theme.color.grey.standard}`,
      borderRadius: '50%',
      backgroundColor: theme.color.grey.desaturated,
      color: theme.color.black
    }
  },
  iconCardRibbon: {
    paddingTop: '5rem',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '3.5rem'
    }
  },
  contactForm: {
    padding: '1rem 2rem',
    '& #formSubmit': {
      maxHeight: '2.25rem'
    },
    [theme.breakpoints.only('sm')]: {
      margin: '0 5rem'
    }
  },
  dottedHeader: {
    '& h2': {
      backgroundColor: theme.color.desaturated,
      background:
        'url(https://open990-assets.s3.amazonaws.com/css/images/icons/dotted.png) repeat-x center',
      paddingRight: '1rem',
      paddingLeft: '1rem',
      marginTop: '1.5rem',
      marginBottom: 0,
      fontSize: '24px',
      fontWeight: 600,
      lineHeight: 1.5,
      margin: '0 0 30px 0'
    }
  },
  lineHeader: {
    ...theme.open990.pageTitle
  },
  lineText: {
    fontSize: '1.25rem',
    fontWeight: 300,
    lineHeight: 1.8
  },
  listNumber: {
    fontSize: '3rem',
    color: theme.color.primary.desaturated,
    textAlign: 'center'
  },
  listTitle: {
    fontSize: '1rem',
    fontWeight: 700,
    margin: 0,
    fontFamily: theme.typography.fontFamily.heading
  },
  listText: {
    lineHeight: 1.8,
    margin: '0.5rem 0 0 0',
    fontSize: '1rem',
    fontWeight: 400
  },
  listBlock: {
    margin: '0 0 3rem 0'
  },
  numberedListItem: {
    textAlign: 'left',
    [theme.breakpoints.down('sm')]: {
      padding: '1rem 0'
    }
  },
  paper: {
    lineHeight: 1.5,
    [theme.breakpoints.down('sm')]: {
      margin: '1.5rem 0'
    }
  },
  newLineHeader: {
    '&:before': {
      borderTop: `5px solid ${theme.color.grey.faded}`
    }
  }
});

const CustomData = ({ classes }) => {
  return (
    <Fragment>
      <Helmet>
        <title>Nonprofit Custom Datasets | Open990.org</title>
        <meta
          name="description"
          content="For researchers, grantseekers, marketers, and nonprofit leaders. Choose from hundreds of variables."
        />
        <meta name="robots" content="all" />
        <link
          rel="canonical"
          href="https://appliednonprofitresearch.com/customdata/"
        />
      </Helmet>
      <div className={classes.root}>
        <MaxContainer>
          <Grid
            container
            className={classes.staticMainContent}
            justify="center"
          >
            <Grid item xs={12} md={10} className={classes.underlinedHeader}>
              <h3>
                <span>
                  IRS nonprofit data <span>•</span>
                </span>{' '}
                <span>
                  1.9 million organizations <span>•</span>
                </span>{' '}
                <span>5.4 million filings</span>
              </h3>
            </Grid>
            <Grid item xs={12} md={10} className={classes.lineText}>
              <p>
                Researchers and nonprofit professionals may wish to purchase
                custom datasets that include variables displayed on Open990 or
                hundreds of other variables from the suite of IRS Forms 990.
              </p>
            </Grid>
            <Grid
              item
              xs={12}
              sm={8}
              md={10}
              className={classes.iconCardRibbon}
            >
              <Grid container spacing={24}>
                <Grid item xs={12} md={4}>
                  <IconCard
                    classes={{
                      extendedPaper: classes.paper
                    }}
                    icon={faFilter}
                    text={
                      'Apply simple data filters so that you pay only for organizations that meet your criteria'
                    }
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <IconCard
                    classes={{
                      extendedPaper: classes.paper
                    }}
                    icon={faCogs}
                    text={
                      'Supply data from Forms 990 (core), EZ, PF, and most schedules, e-filed in 2011 – present'
                    }
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <IconCard
                    classes={{
                      extendedPaper: classes.paper
                    }}
                    icon={faDownload}
                    text={
                      'Provide the custom extract in delimited (.csv) or Excel (.xlsx) format'
                    }
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={10} className={classes.lineText}>
              <p>
                The most data are available for organizations that file tax
                returns electronically, but some data (e.g., total assets, NTEE
                codes) are available for organizations that paper-file 990s.
              </p>
            </Grid>
            <Grid
              item
              xs={12}
              md={10}
              className={classNames(classes.lineHeader, classes.newLineHeader)}
            >
              <h1>Identify trends</h1>
            </Grid>
            <Grid item xs={12} md={10} className={classes.lineText}>
              <p>
                We track over 350 dimensions on tax-exempt organizations from
                2010 to present. Our proprietary records linkage algorithm
                identifies amounts spent on individual people and programs over
                time – even if they are written differently on each tax return.
                This reveals trends in executive compensation, program expenses,
                program revenues, and more.
              </p>
            </Grid>
            <Grid item sm={10}>
              <Grid container>
                <Grid item xs={12} className={classes.lineHeader}>
                  <h1>Our process</h1>
                </Grid>
                <Grid item xs={12} className={classes.listBlock}>
                  <Grid container>
                    <Grid
                      item
                      xs={12}
                      md={4}
                      className={classes.numberedListItem}
                    >
                      <Grid container>
                        <Grid item xs={2} className={classes.listNumber}>
                          1.
                        </Grid>
                        <Grid item xs={10}>
                          <Grid container>
                            <Grid
                              item
                              xs={12}
                              md={10}
                              className={classes.listTitle}
                            >
                              Simplify structure
                            </Grid>
                            <Grid
                              item
                              xs={12}
                              md={10}
                              className={classes.listText}
                            >
                              Our data scientists compare tax forms to bring
                              together related variables.
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      md={4}
                      className={classes.numberedListItem}
                    >
                      <Grid container>
                        <Grid item xs={2} className={classes.listNumber}>
                          2.
                        </Grid>
                        <Grid item xs={10}>
                          <Grid container>
                            <Grid
                              item
                              xs={12}
                              md={10}
                              className={classes.listTitle}
                            >
                              Match across years
                            </Grid>
                            <Grid
                              item
                              xs={12}
                              md={10}
                              className={classes.listText}
                            >
                              Our technology links records on individuals and
                              programs, even if they are written slightly
                              differently each year.
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      md={4}
                      className={classes.numberedListItem}
                    >
                      <Grid container>
                        <Grid item xs={2} className={classes.listNumber}>
                          3.
                        </Grid>
                        <Grid item xs={10}>
                          <Grid container>
                            <Grid
                              item
                              xs={12}
                              md={10}
                              className={classes.listTitle}
                            >
                              Derive new variables
                            </Grid>
                            <Grid
                              item
                              xs={12}
                              md={10}
                              className={classes.listText}
                            >
                              We compute new variables to add to the dataset,
                              e.g., fundraising efficiency.
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={10} className={classes.lineText}>
              <p>
                Data sources include IRS Forms 990, 990-PF, 990-EZ, schedules,
                IRS Business Master File, and National Center for Charitable
                Statistics.{' '}
              </p>
            </Grid>
            <Grid item xs={12} md={10}>
              <ContactForm
                classes={{
                  extendedForm: classes.contactForm
                }}
                headerText={
                  'Interested in using nonprofit financial data in your work?'
                }
                subHeaderText={'Contact us to discuss your goals.'}
                formName="custom datasets"
                direction={'row'}
              />
            </Grid>
          </Grid>
        </MaxContainer>
      </div>
    </Fragment>
  );
};

export default withStyles(styles)(CustomData);
