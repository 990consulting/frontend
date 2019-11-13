/*
 * Copyright (c) 2018 Open990.org, Inc.. All rights reserved.
 */

import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

import NavLink from 'react-router-dom/NavLink';
import { withRouter } from 'react-router-dom';
import classNames from 'classnames';

import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';

import ProductCard from 'Catalog/ProductCard';

import MaxContainer from 'hoc/MaxContainer';
import apiClient from 'App/ApiClient';

import {
  root,
  pro,
  benchmark,
  api,
  orgSearch,
  resources
} from 'App/routes';

import apiIcon from '../Static/icons/api.png';
import benchmarkIcon from '../Static/icons/benchmark.png';
import customIcon from '../Static/icons/custom.png';
import foundationIcon from '../Static/icons/foundations.png';

import cardText from 'Catalog/catalogText';
import CatalogButton from "./CatalogButton";
import ContactUsButton from "./ContactUsButton";

const styles = (theme) => ({
  root: {
    ...theme.open990.pageContainer,
    [theme.breakpoints.down('sm')]: {
      marginBottom: '1.75rem'
    }
  },
  paper: {
  },
  container: {
    width: '100%'
  },
  cardHeading: {
    color: theme.color.primary.desaturated
  },
  lineHeader: {
    ...theme.open990.pageTitle,
    margin: '2rem 0 0'
  },
  lineText: {
    fontSize: '1.25rem',
    fontWeight: 300,
    lineHeight: 1.8,
    wordBreak: 'break-word'
  },
  iconCardRibbon: {
    paddingTop: '5rem',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '3.5rem'
    }
  },
  endpointsText: {
    textAlign: 'left',
    fontSize: '1rem',
    '&>div': {
      fontWeight: 600,
      fontSize: '1.1rem'
    },
    '& li': {
      padding: '0.25rem 0'
    }
  },
  colored: {
    color: theme.color.primary.desaturated
  },
  divider: {
    padding: '2rem 0'
  },
  newLineHeader: {
    '&:before': {
      borderTop: `5px solid ${theme.color.grey.faded}`
    }
  },
  listWrapper: {
    padding: '1rem 0'
  },
  bottomText: {
    paddingTop: '2.5rem',
    lineHeight: 1.5
  },
  link: {
    textDecoration: 'underline',
    color: theme.color.primary.desaturated
  },
  subHeader:{
    fontSize: '1.2rem',
    margin: '1rem 0 2rem'
  }
});

const Catalog = ({
                   classes,
                   history
                 }) => {
  
  const advancedSearchLink = (
    <NavLink to={orgSearch} className={classes.link}>
      {'Advanced Search'}
    </NavLink>
  );

  const variableLevelLink = (
    <NavLink to={resources} className={classes.link}>
      {'variable-level files'}
    </NavLink>
  );

  const doDownload = (dataset) => {
    apiClient.downloadDataset(dataset)
        .then(res => {
          // window.open(res.data, "_blank");
          const link = document.createElement('a');
          link.href = res.data;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        });
  };

  const linkTo = (link) => {
    if(!link) return;
    history.push(link);
  };

  return (
    <Fragment>
      <Helmet>
        <title>Nonprofit Data &ndash; Explore Open990 datasets</title>
        <meta name="description" content="Open990 sells information about nonprofits in the form of benchmark reports, datasets, APIs, and consulting." />
        <meta name="robots" content="all"/>
      </Helmet>
      <div className={classNames("Catalog", classes.root)}>
        <MaxContainer classes={{ container: classes.container }}>
          <Grid item xs={12}>
            <Grid container justify="center">
              <Grid item xs={12} md={10} lg={8} className={classes.lineHeader}>
                <h1>Datasets</h1>
              </Grid>
              <Grid item xs={12} md={10} lg={8} className={classes.subHeader}>
                More free datasets under development.
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container justify="center">
              <Grid item xs={12} md={10} lg={8}>
                <Grid container justify="center" spacing={40}>
                  <Grid item xs={12} sm={6}>
                    <ProductCard
                        title={'Governance Dataset'}
                        text={cardText.governanceDataset}
                    >
                      <CatalogButton
                          buttonText="Download"
                          onClickTarget = {() => doDownload("Open990_Governance_Snack_Set_Public.zip")}
                      />
                    </ProductCard>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <ProductCard
                        title={'Contractor Compensation Dataset'}
                        text={cardText.contractorDataset}
                    >
                      <CatalogButton
                          buttonText="Download"
                          onClickTarget = {() => doDownload("Open990_Contractor_Compensation_Snack_Set_Public.zip")}
                      />
                    </ProductCard>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <ProductCard
                        icon={foundationIcon}
                        title={'Foundations Dataset'}
                        text={cardText.foundation}
                    >
                      <ContactUsButton/>
                    </ProductCard>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
              </Grid>
              </Grid>
            </Grid>
          </Grid>
        </MaxContainer>
      </div>
    </Fragment>
  )
}

export default withRouter(withStyles(styles)(withRouter(Catalog)));

