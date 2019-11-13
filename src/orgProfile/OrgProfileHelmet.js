/*
 * Copyright (c) 2019 Open990.org, Inc.. All rights reserved.
 */

import React from 'react';
import { Helmet } from 'react-helmet';

class OrgProfileHelmet extends React.Component {
  render() {
    const { meta } = this.props;
    return (<Helmet>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta name="robots" content={meta.robots} />
      <link rel="canonical" href={meta.canonical} />
    </Helmet>);
  }
}

export default OrgProfileHelmet;