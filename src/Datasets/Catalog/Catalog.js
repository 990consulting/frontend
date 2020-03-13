/*
 * Copyright (c) 2019 Open990.org, Inc.. All rights reserved.
 */

import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import ProductCard from './ProductCard';
import MaxContainer from 'hoc/MaxContainer';
import foundationIcon from 'Static/icons/foundations.png';

import DatasetPageHelmet from '../DatasetPageHelmet';
import DatasetWrapper from '../DatasetWrapper';
import cardText from './catalogText';
import CatalogButton from './CatalogButton';
import {
  catalog,
  foundationsAndGrants,
  nonprofitGovernance,
  contractorCompensation,
  executiveCompensation
} from 'App/routes';

const styles = theme => ({
  root: {
    ...theme.open990.pageContainer,
    [theme.breakpoints.down('sm')]: {
      marginBottom: '1.75rem'
    }
  },
  paper: {},
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
  subHeader: {
    fontSize: '1.2rem',
    margin: '1rem 0 2rem'
  }
});

const Catalog = ({ history, classes }) => {
  const externalLink = url => {
    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Fragment>
      <DatasetPageHelmet
        title="Nonprofit Data &ndash; Explore Open990.org datasets"
        description="Datasets on foundations and grants, nonprofit governance, contractor compensation, and more."
        path={catalog}
      />
      <DatasetWrapper>
        {onDatasetDownload => (
          <div className={classNames('Catalog', classes.root)}>
            <MaxContainer classes={{ container: classes.container }}>
              <Grid item xs={12}>
                <Grid container justify="center">
                  <Grid
                    item
                    xs={12}
                    md={10}
                    lg={8}
                    className={classes.lineHeader}
                  >
                    <h1>Datasets</h1>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={10}
                    lg={8}
                    className={classes.subHeader}
                  >
                    <a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/"><img alt="Creative Commons License" src="https://i.creativecommons.org/l/by-nc/4.0/88x31.png" /></a><br/>
                    Open990's free datasets are licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/">Creative Commons Attribution-NonCommercial 4.0 International License</a>.
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container justify="center">
                  <Grid item xs={12} md={10} lg={8}>
                    <Grid container justify="center" spacing={40}>
                      <Grid item xs={12} sm={6}>
                        <ProductCard
                          title={'Executive Compensation Dataset'}
                          text={cardText.executiveDataset}
                        >
                          <CatalogButton
                            buttonText="Download"
                            onClickTarget={e =>
                              onDatasetDownload(
                                e,
                                'Open990_SnackSet_Executive_Compensation.zip'
                              )
                            }
                            id="catalog-download-executive"
                          />
                          <CatalogButton
                            buttonText="Learn more"
                            onClickTarget={e =>
                              history.push(executiveCompensation)
                            }
                            id="catalog-learn-more-executive"
                          />
                        </ProductCard>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <ProductCard
                          title={'Foundations & Grants Dataset'}
                          text={cardText.foundation}
                        >
                          <CatalogButton
                            buttonText="Download"
                            onClickTarget={e =>
                              onDatasetDownload(
                                e,
                                'Open990_SnackSet_Foundations_Grants.zip'
                              )
                            }
                            id="catalog-download-foundation"
                          />
                          <CatalogButton
                            buttonText="Learn more"
                            onClickTarget={e =>
                              history.push(foundationsAndGrants)
                            }
                            id="catalog-learn-more-foundation"
                          />
                        </ProductCard>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <ProductCard
                          title={'Governance Dataset'}
                          text={cardText.governanceDataset}
                        >
                          <CatalogButton
                            buttonText="Download"
                            onClickTarget={e =>
                              onDatasetDownload(
                                e,
                                'Open990_Governance_Snack_Set_Public.zip'
                              )
                            }
                            id="catalog-download-governance"
                          />
                          <CatalogButton
                            buttonText="Learn more"
                            onClickTarget={e =>
                              history.push(nonprofitGovernance)
                            }
                            id="catalog-learn-more-governance"
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
                            onClickTarget={e =>
                              onDatasetDownload(
                                e,
                                'Open990_Contractor_Compensation_Snack_Set_Public.zip'
                              )
                            }
                            id="catalog-download-contractor"
                          />
                          <CatalogButton
                            buttonText="Learn more"
                            onClickTarget={e =>
                              history.push(contractorCompensation)
                            }
                            id="catalog-learn-more-contractor"
                          />
                        </ProductCard>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <ProductCard
                          icon={foundationIcon}
                          title={'EO-BMF from IRS'}
                          text={cardText.bmf}
                        >
                          <CatalogButton
                            buttonText="IRS.gov"
                            onClickTarget={() =>
                              externalLink(
                                'https://www.irs.gov/charities-non-profits/exempt-organizations-business-master-file-extract-eo-bmf'
                              )
                            }
                          />
                        </ProductCard>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}></Grid>
                  </Grid>
                </Grid>
              </Grid>
            </MaxContainer>
          </div>
        )}
      </DatasetWrapper>
    </Fragment>
  );
};

export default withRouter(withStyles(styles)(Catalog));
