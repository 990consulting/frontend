/*
 * Copyright (c) 2018 Open990.org, Inc.. All rights reserved.
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
import Catalog from 'Catalog/Catalog';
import OrgSearchResults from 'searchResults/OrgSearchResults';
import PeopleSearchResults from 'searchResults/PeopleSearchResults';
import OrgProfile from "../orgProfile/OrgProfile";
import DataSearchResults from "../searchResults/DataSearchResults";

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
  //customData,
  resources,
  //api,
  catalog,
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
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <Switch>
        <Route path={homeOrg} exact component={HomeOrg} /> {/* Helmeted */}
        <Route path={homePeople} exact component={HomePeople} /> {/* Helmeted */}
        <Route path={copyrightPolicy} exact component={CopyrightPolicy} /> {/* Helmeted */}
        <Route path={termsOfService} exact component={TermsOfService} /> {/* Helmeted */}
        <Route path={privacyPolicy} exact component={PrivacyPolicy} /> {/* Helmeted */}
        <Route path={contact} exact component={Contact} /> {/* Helmeted */}
        <Route path={resources} exact component={Resources} /> {/* Helmeted */}
        <Route path={catalog} exact component={Catalog} /> {/* Helmeted */}
        <Route path={orgSearch} component={OrgSearchResults} /> {/* Helmeted */}
        <Route path={peopleSearch} component={PeopleSearchResults} /> {/* Helmeted */}
        <Route path={dataSearch} component={DataSearchResults} /> {/* Helmeted */}
        <Route path = {orgProfile} component={OrgProfile} />
        <Route path = {orgProfileExtended} component={OrgProfile} />
        
        <Route path={root} exact render={() => ( <Redirect to={homeOrg} /> )} />
        <Route path={data} exact render={() =>( <Redirect to={resources} /> )} />
      </Switch>
    )
  }
}
export default withRouter(SiteRouter);
