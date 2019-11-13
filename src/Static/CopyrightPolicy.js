/*
 * Copyright (c) 2019 Open990.org, Inc. All rights reserved.
 */

import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

import withStyles from '@material-ui/core/styles/withStyles';

import MaxContainer from 'hoc/MaxContainer';
import classNames from 'classnames';
import { styles } from 'Static/legalStyles'

import {
  termsOfService,
  mail
} from 'App/routes';


class CopyrightPolicy extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <Helmet>
          <title>Open990 DMCA Copyright Policy</title>
          <meta name="description" content="Search database of charities, foundations, and other nonprofits--revenues, compensation, fundraising, mission, etc. View profiles free, no registration." />
          <meta name="robots" content="noindex"/>
        </Helmet>
        <div className={classNames(
          'TermsOfServicePage',
          classes.root
        )}>
          <MaxContainer>
            <div className={classes.policyHeader}>
              <h1>DMCA Copyright Policy</h1>
            </div>
        
            <div className={classes.staticMainContent}>
              <p><em>Effective date: August 20, 2019</em></p>
              <p>In accordance with the DMCA, we’ve adopted the policy below toward copyright infringement. We reserve the
                right
                to (1) block access to or remove material that we believe in good faith to be copyrighted material that
                has
                been
                illegally copied and distributed by any of our advertisers, affiliates, content providers, members or
                users
                and
                (2) remove and discontinue service to repeat offenders.</p>
              <p>
                Remember that your use of Open990.org Inc.’s (Open990) Services is at all times subject to the Open990&nbsp;
                <a href={termsOfService}>
                  Terms of Service
                </a>
                , which incorporates this DMCA Copyright Policy. Any terms we use in this Policy without defining them
                have
                the
                definitions given to them in the Open990&nbsp;
                <a href={termsOfService}>
                  Terms of Service
                </a>
                .
              </p>
              <ol>
                <li>
                  <em className={classes.chapterTitle}>Procedure for Reporting Copyright Infringements</em>
                  . If you believe that material or content residing on or accessible through the services infringes your
                  copyright (or the copyright of someone whom you are authorized to act on behalf of), please send a
                  notice
                  of
                  copyright infringement containing the following information to Open990’s Designated Agent to Receive
                  Notification
                  of Claimed Infringement (our “Designated Agent,” whose contact details are listed below):
                  <ol type="a">
                    <li>A physical or electronic signature of a person authorized to act on behalf of the owner of the
                      copyright
                      that has been allegedly infringed;
                    </li>
                    <li>Identification of works or materials being infringed;</li>
                    <li>Identification of the material that is claimed to be infringing including information regarding
                      the
                      location of the infringing materials that the copyright owner seeks to have removed, with sufficient
                      detail so that Open990 is capable of finding and verifying its existence;
                    </li>
                    <li>Contact information about the notifier including address, telephone number and, if available,
                      email
                      address;
                    </li>
                    <li>A statement that the notifier has a good faith belief that the material identified in (1)(c) is
                      not
                      authorized by the copyright owner, its agent, or the law; and
                    </li>
                    <li>A statement made under penalty of perjury that the information provided is accurate and the
                      notifying
                      party is authorized to make the complaint on behalf of the copyright owner.
                    </li>
                  </ol>
                </li>
                <li>
                  <em className={classes.chapterTitle}>Once Proper Bona Fide Infringement Notification is Received by the
                    Designated Agent</em>
                  . Upon receipt of a proper notice of copyright infringement, we reserve the right to:
                  <ol type="a">
                    <li>remove or disable access to the infringing material;</li>
                    <li>notify the content provider who is accused of infringement that we have removed or disabled access
                      to
                      the applicable material; and
                    </li>
                    <li>terminate such content provider's access to the services if he or she is a repeat offender.</li>
                  </ol>
                </li>
                <li>
                  <em className={classes.chapterTitle}>Procedure to Supply a Counter-Notice to the Designated Agent</em>
                  . If the content provider believes that the material that was removed (or to which access was disabled)
                  is
                  not
                  infringing, or the content provider believes that it has the right to post and use such material from
                  the
                  copyright owner, the copyright owner's agent, or, pursuant to the law, the content provider may send us
                  a
                  counter-notice containing the following information to the Designated Agent:
                  <ol type="a">
                    <li>A physical or electronic signature of the content provider;</li>
                    <li>Identification of the material that has been removed or to which access has been disabled and the
                      location at which the material appeared before it was removed or disabled;
                    </li>
                    <li>A statement that the content provider has a good faith belief that the material was removed or
                      disabled
                      as a result of mistake or misidentification of the material; and
                    </li>
                    <li>Content provider's name, address, telephone number, and, if available, email address, and a
                      statement
                      that such person or entity consents to the jurisdiction of the Federal Court for the judicial
                      district
                      in
                      which the content provider’s address is located, or, if the content provider's address is located
                      outside
                      the United States, for any judicial district in which Open990 is located, and that such person or entity
                      will
                      accept service of process from the person who provided notification of the alleged infringement.
                    </li>
                  </ol>
                </li>
              </ol>
              <p>If a counter-notice is received by the Designated Agent, Open990 may, in its discretion, send a copy of the
                counter-notice to the original complaining party informing that person that Open990 may replace the removed
                material
                or cease disabling it in 10 business days. Unless the copyright owner files an action seeking a court
                order
                against the content provider accused of committing infringement, the removed material may be replaced or
                access
                to it restored in 10 to 14 business days or more after receipt of the counter-notice, at Open990's
                discretion.</p>
              <p className={classes.contact}>
                Please contact Open990's Designated Agent at&nbsp;
                <a href={mail}>
                  info@open990.org
                </a>&nbsp;
                at the following address:
              </p>
              <div>
                Legal Department
                <br/>
                Open990.org, Inc.
                <br/>
                PO Box 1209
                <br/>
                Maplewood, NJ 07040
              </div>
            </div>
          </MaxContainer>
        </div>
      </Fragment>
    );
  }
}

export default withStyles(styles)(CopyrightPolicy);
