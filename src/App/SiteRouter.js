/*
 * Copyright (c) 2019 Open990.org, Inc.. All rights reserved.
 */

import React from 'react';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom';

import HomeOrg from 'HomePage/HomeOrg';
import HomePeople from 'HomePage/HomePeople';
import CopyrightPolicy from 'Static/CopyrightPolicy';
import TermsOfService from 'Static/TermsOfService';
import PrivacyPolicy from 'Static/PrivacyPolicy';
import Contact from 'Static/Contact';
import Resources from 'Static/Resources';
import Catalog from 'Datasets/Catalog/Catalog';
import FoundationsAndGrants from 'Datasets/Pages/FoundationsAndGrants';
import NonprofitGovernance from 'Datasets/Pages/NonprofitGovernance';
import ContractorCompensation from 'Datasets/Pages/ContractorCompensation';
import ExecutiveCompensation from 'Datasets/Pages/ExecutiveCompensation';
import OrgSearchResults from 'searchResults/OrgSearchResults';
import PeopleSearchResults from 'searchResults/PeopleSearchResults';
import OrgProfile from '../orgProfile/OrgProfile';
import DataSearchResults from '../searchResults/DataSearchResults';
import CustomData from "../Static/CustomData";

import {
  root,
  homeOrg,
  homePeople,
  copyrightPolicy,
  termsOfService,
  privacyPolicy,
  //benchmark,
  contact,
  //pro,
  customData,
  resources,
  //api,
  catalog,
  foundationsAndGrants,
  nonprofitGovernance,
  contractorCompensation,
  executiveCompensation,
  data,
  orgSearch,
  peopleSearch,
  dataSearch,
  orgProfile,
  orgProfileExtended
} from 'App/routes';

class SiteRouter extends React.Component {
  componentDidUpdate(prevProps) {
    // console.log(this.props.location, prevProps.location)
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    window.scrollTo(0, 0);
  }

  // TODO Remove inexplicable {' '} blocks
  render() {
    return (
      <Switch>
        <Route path={homeOrg} exact component={HomeOrg} /> 
        <Route path={homePeople} exact component={HomePeople} />
        <Route path={copyrightPolicy} exact component={CopyrightPolicy} />
        <Route path={termsOfService} exact component={TermsOfService} />
        <Route path={privacyPolicy} exact component={PrivacyPolicy} />
        <Route path={customData} exact component={CustomData} />
        <Route path={contact} exact component={Contact} /> 
        <Route path={resources} exact component={Resources} /> 
        <Route path={catalog} exact component={Catalog} />
        <Route
          path={foundationsAndGrants}
          exact
          component={FoundationsAndGrants}
        />
        <Route
          path={nonprofitGovernance}
          exact
          component={NonprofitGovernance}
        />
        <Route
          path={contractorCompensation}
          exact
          component={ContractorCompensation}
        />
        <Route
          path={executiveCompensation}
          exact
          component={ExecutiveCompensation}
        />
        <Route path={orgSearch} component={OrgSearchResults} />
        <Route path={peopleSearch} component={PeopleSearchResults} />
        <Route path={dataSearch} component={DataSearchResults} />
        <Route path={orgProfile} component={OrgProfile} />
        <Route path={orgProfileExtended} component={OrgProfile} />
        <Route path={root} exact render={() => <Redirect to={homeOrg} />} />
        <Route path={data} exact render={() => <Redirect to={resources} />} />
      </Switch>
    );
  }
}
export default withRouter(SiteRouter);
