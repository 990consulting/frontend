/*
 * Copyright (c) 2018 Open990.org, Inc.. All rights reserved.
 */

import React  from 'react';
import withWidth, {isWidthDown, isWidthUp} from '@material-ui/core/withWidth';

const withViewCheck = () => (Component) => {
  const WithViewCheck = (props) => (
    <Component
      isViewXs={isWidthDown('xs', props.width)}
      isViewSm={props.width === 'sm'}
      isViewSmDown={isWidthDown('sm', props.width)}
      isViewMd={props.width === 'md'}
      isViewLg={isWidthDown('lg', props.width)}
      isViewXl={isWidthDown('xl', props.width)}
      isViewLgUp={isWidthUp('lg', props.width)}
      isViewMdUp={isWidthUp('md', props.width)}
      {...props}
    />
  );

  return withWidth()(WithViewCheck);
};

export default withViewCheck;