/*
 * Copyright (c) 2019 Open990.org, Inc. All rights reserved.
 */

import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

import { styles } from 'Static/legalStyles'

import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';


import MaxContainer from 'hoc/MaxContainer';
import classNames from 'classnames';

import {
  termsOfService,
  mail,
  consulting,
  Open990
} from 'App/routes';

class PrivacyPolicy extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <Helmet>
          <title>Open990 Privacy Policy</title>
          <meta name="description" content="Search database of charities, foundations, and other nonprofits--revenues, compensation, fundraising, mission, etc. View profiles free, no registration." />
          <meta name="robots" content="noindex"/>
        </Helmet>
        
        <div className={classNames(
          'TermsOfServicePage',
          classes.root
        )}>
          <MaxContainer>
            <Grid item xs={12}>
              <Grid container justify="center">
                <Grid item xs={12} md={10}>
                  <div className={classes.policyHeader}>
                    <h1>Privacy policy</h1>
                  </div>
                  <div className={classes.staticMainContent}>
                    <p><em>Effective date: August 30, 2019</em></p>
                    <p>We at Open990.org, Inc. (“Open990”) know you care about how your personal information is used and
                      shared,
                      and we take your privacy seriously.&nbsp; Please read the following to learn more about our Privacy
                      Policy.&nbsp; <span className={classes.chapterTitle}>By using or accessing the Services in any manner, you acknowledge that you accept the practices and policies outlined in this Privacy Policy, and you hereby consent that we will collect, use, and share your information in the following ways.</span>
                    </p>
                    <p>Remember that your use of Open990’s Services is at all times subject to the <a
                      href={termsOfService}>Terms of Service</a>, which incorporates this Privacy
                      Policy.&nbsp; Any terms we use in this Policy without defining them have the definitions given to them
                      in
                      the <a href={termsOfService}>Terms of Service</a></p>
                    <p><span className={classes.chapterTitle}><u>What does this Privacy Policy cover</u></span><span
                      className={classes.chapterTitle}>?</span></p>
                    <p>This Privacy Policy covers our treatment of personally identifiable information ("Personal
                      Information")
                      that we gather when you are accessing or using our Services, but not to the practices of companies we
                      don’t
                      own or control, or people that we don’t manage.&nbsp; We gather various types of Personal Information
                      from
                      our users, as explained in more detail below, and we use this Personal Information internally in
                      connection
                      with our Services, including to personalize, provide, and improve our services, to allow you to set up
                      a
                      user account and profile, to contact you and allow other users to contact you, to fulfill your
                      requests
                      for
                      certain products and services, and to analyze how you use the Services. In certain cases, we may also
                      share
                      some Personal Information with third parties, but only as described below.</p>
                    <p>As noted in the <a href={termsOfService}>Terms of Service</a>, we do not
                      knowingly collect or solicit personal information from anyone under the age of 13. If you are under
                      13,
                      please do not attempt to register for the Services or send any personal information about yourself to
                      us.
                      If
                      we learn that we have collected personal information from a child under age 13, we will delete that
                      information as quickly as possible. If you believe that a child under 13 may have provided us personal
                      information, please contact us at <a href={mail}>info@open990.org</a>.</p>
                    <p><span
                      className={classes.chapterTitle}><u>Will Open990 ever change this Privacy Policy</u></span><span
                      className={classes.chapterTitle}>?</span></p>
                    <p>We’re constantly trying to improve our Services, so we may need to change this Privacy Policy from
                      time
                      to
                      time as well, but we will alert you to changes by placing a notice on <a
                        href="https://www.open990.com">open990.com </a>
                      and/or <a href="https://www.open990.org">open990.org</a>, by sending you an email, and/or by
                      some other means. Please note that if you’ve opted not to receive legal notice emails from us (or you
                      haven’t provided us with your email address), those legal notices will still govern your use of the
                      Services, and you are still responsible for reading and understanding them.&nbsp; If you use the
                      Services
                      after any changes to the Privacy Policy have been posted, that means you agree to all of the
                      changes.&nbsp; Use of information we collect now is subject to the Privacy Policy in effect at the
                      time
                      such
                      information is collected.</p>
                    <p><span className={classes.chapterTitle}><u>What Information does Open990 Collect</u></span><span
                      className={classes.chapterTitle}>?</span></p>
                    <p><em><u>Information You Provide to Us:</u></em></p>
                    <p>We receive and store any information you knowingly provide to us.&nbsp; For example, through the
                      registration process and/or through your account settings, we may collect Personal Information such as
                      your
                      name, email address and phone number.&nbsp; Certain information may be required to register with us or
                      to
                      take advantage of some of our features.</p>
                    <p>We may communicate with you if you’ve provided us the means to do so. For example, if you’ve given us
                      your
                      email address, we may send you promotional email offers on behalf of other businesses, or email you
                      about
                      your use of the Services.&nbsp; If you do not want to receive communications from us, please indicate
                      your
                      preference by emailing us at <a href={mail}>info@open990.org</a>.</p>
                    <p><em><u>Information Collected Automatically</u></em></p>
                    <p>Whenever you interact with our Services, we automatically receive and record information on our
                      server
                      logs
                      from your browser or device, which may include your IP address, geolocation data, device
                      identification,
                      “cookie” information, the type of browser and/or device you’re using to access our Services, and the
                      page
                      or
                      feature you requested. “Cookies” are identifiers we transfer to your browser or device that allow us
                      to
                      recognize your browser or device and tell us how and when pages and features in our Services are
                      visited
                      and
                      by how many people.&nbsp; You may be able to change the preferences on your browser or device to
                      prevent
                      or
                      limit your device’s acceptance of cookies, but this may prevent you from taking advantage of some of
                      our
                      features.</p>
                    <p>If you click on a link to a third party website or service, a third party may also transmit cookies
                      to
                      you.&nbsp; Again, this Privacy Policy does not cover the use of cookies by any third parties, and we
                      aren’t
                      responsible for their privacy policies and practices.&nbsp; Please be aware that cookies placed by
                      third
                      parties may continue to track your activities online even after you have left our Services, and those
                      third
                      parties may not honor “Do Not Track” requests you have set using your browser or device.</p>
                    <p>We may use this data to customize content for you that we think you might like, based on your usage
                      patterns.&nbsp; We may also use it to improve the Services – for example, this data can tell us how
                      often
                      users use a particular feature of the Services, and we can use that knowledge to make the Services
                      interesting to as many users as possible.</p>
                    <p><em><u>Information Collected From Other Websites and Do Not Track Policy</u></em></p>
                    <p>Through cookies we place on your browser or device, we may collect information about your online
                      activity
                      after you leave our Services.&nbsp; Just like any other usage information we collect, this information
                      allows us to improve the Services and customize your online experience, and otherwise as described in
                      this
                      Privacy Policy.&nbsp; Your browser may offer you a “Do Not Track” option, which allows you to signal
                      to
                      operators of websites and web applications and services (including behavioral advertising services)
                      that
                      you
                      do not wish such operators to track certain of your online activities over time and across different
                      websites.&nbsp; Our Services do not support Do Not Track requests at this time, which means that we
                      collect
                      information about your online activity both while you are using the Services and after you leave our
                      Services</p>
                    <p><span
                      className={classes.chapterTitle}><u>Will Open990 Share Any of the Personal Information it Receives</u></span><span
                      className={classes.chapterTitle}>?</span></p>
                    <p>We do not rent or sell your Personal Information in personally identifiable form to anyone, provided
                      certain Personal Information may be transferred in connection with business transfers, and as
                      otherwise
                      described below. We may share your Personal Information with third parties as described in this
                      section:</p>
                    <p><span className={classes.chapterTitle}>Information that’s been de-identified.&nbsp; </span>We may
                      de-identify your Personal Information so that you are not identified as an individual, and provide
                      that
                      information to our partners. We may also provide aggregate usage information to our partners (or allow
                      partners to collect that information from you), who may use such information to understand how often
                      and
                      in
                      what ways people use our Services, so that they, too, can provide you with an optimal online
                      experience.
                      However, we never disclose aggregate usage or de-identified information to a partner (or allow a
                      partner
                      to
                      collect such information) in a manner that would identify you as an individual person.</p>
                    <p><span className={classes.chapterTitle}>Affiliated Businesses:</span> In certain situations,
                      businesses or
                      third party websites we’re affiliated with may sell or provide products or services to you through or
                      in
                      connection with the Services (either alone or jointly with us).&nbsp; You can recognize when an
                      affiliated
                      business is associated with such a transaction or service, and we will share your Personal Information
                      with
                      that affiliated business only to the extent that it is related to such transaction or service. We have
                      no
                      control over the policies and practices of third party websites or businesses as to privacy or
                      anything
                      else, so if you choose to take part in any transaction or service relating to an affiliated website or
                      business, please review all such business’ or websites’ policies.</p>
                    <p><span className={classes.chapterTitle}>Agents:</span>.</p>
                    <p><span className={classes.chapterTitle}>User Profiles and Submissions:</span> Certain user profile
                      information, including your name, location, and any video or image content that such user has uploaded
                      to
                      the Services, may be displayed to other users to facilitate user interaction within the Services or
                      address
                      your request for our services.&nbsp; Please remember that any content you upload to your public user
                      profile, along with any Personal Information or content that you voluntarily disclose online in a
                      manner
                      other users can view (on discussion boards, in messages and chat areas, etc.) becomes publicly
                      available,
                      and can be collected and used by anyone.&nbsp; Your user name may also be displayed to other users if
                      and
                      when you send messages or comments or upload images or videos through the Services and other users can
                      contact you through messages and comments.</p>
                    <p><span className={classes.chapterTitle}>Business Transfers:</span> We may choose to buy or sell
                      assets,
                      and
                      may share and/or transfer customer information in connection with the evaluation of and entry into
                      such
                      transactions.&nbsp; Also, if we (or our assets) are acquired, or if we go out of business, enter
                      bankruptcy,
                      or go through some other change of control, Personal Information could be one of the assets
                      transferred to
                      or acquired by a third party.</p>
                    <p><span className={classes.chapterTitle}>Protection of Company and Others:</span> We reserve the right
                      to
                      access, read, preserve, and disclose any information that we reasonably believe is necessary to comply
                      with
                      law or court order; enforce or apply our <a href={termsOfService}>Terms of
                        Service</a> and other agreements; or protect the rights, property, or safety of Company, our
                      employees,
                      our users, or others.</p>
                    <p><span
                      className={classes.chapterTitle}><u>Is Personal Information about me secure</u></span><span
                      className={classes.chapterTitle}>?</span></p>
                    <p>Your account is protected by a password for your privacy and security.&nbsp; You must prevent
                      unauthorized
                      access to your account and Personal Information by selecting and protecting your password,
                      appropriately
                      and
                      limiting access to your computer or device and browser by signing off after you have finished
                      accessing
                      your
                      account.</p>
                    <p>We endeavor to protect the privacy of your account and other Personal Information we hold in our
                      records,
                      but unfortunately, we cannot guarantee complete security. &nbsp;Unauthorized entry or use, hardware or
                      software failure, and other factors, may compromise the security of user information at any time.</p>
                    <p><span
                      className={classes.chapterTitle}><u>What Personal Information can I access</u></span><span
                      className={classes.chapterTitle}>?</span></p>
                    <p>You may access, and, in some cases, edit or delete the following information you’ve provided to
                      us:</p>
                    <ul>
                      <li>name and password</li>
                      <li>email address</li>
                      <li>location</li>
                    </ul>
                    <p>The information you can view, update, and delete may change as the Services change.&nbsp; If you have
                      any
                      questions about viewing or updating information we have on file about you, please contact us at <a
                        href={mail}>info@open990.org</a>.</p>
                    <p>Under California Civil Code Sections 1798.83-1798.84, California residents are entitled to contact us
                      to
                      prevent disclosure of Personal Information to third parties for such third parties’ direct marketing
                      purposes; in order to submit such a request, please contact us at <a
                        href={mail}>info@open990.org</a>.</p>
                    <p><span className={classes.chapterTitle}><u>What choices do I have</u></span><span
                      className={classes.chapterTitle}>?</span></p>
                    <p>You can always opt not to disclose information to us, but keep in mind some information may be needed
                      to
                      register with us or to take advantage of some of our features.</p>
                    <p>You may be able to add, update, or delete information as explained above.&nbsp; When you update
                      information, however, we may maintain a copy of the unrevised information in our records.&nbsp; You
                      may
                      request deletion of your account by emailing us at info@open990.org.&nbsp; Some information may
                      remain
                      in our records after your deletion of such information from your account. We may use any aggregated
                      data
                      derived from or incorporating your Personal Information after you update or delete it, but not in a
                      manner
                      that would identify you personally.</p>
                    <p><span
                      className={classes.chapterTitle}><u>What if I have questions about this policy?</u></span></p>
                    <p>If you have any questions or concerns regarding our privacy policies, please send us a detailed
                      message
                      to <a href={mail}>info@open990.org</a>, and we will try to resolve your
                      concerns.
                    </p>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </MaxContainer>
        </div>
      </Fragment>
    );
  }
}

export default withStyles(styles)(PrivacyPolicy);

