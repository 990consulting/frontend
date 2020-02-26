import React from 'react';
import { Helmet } from 'react-helmet';

const DatasetsWrapper = ({title, description, path}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="all" />
      <link
        rel="canonical"
        href={`https://www.open990.org${path}`}
      />
    </Helmet>
  );
};

export default DatasetsWrapper;
