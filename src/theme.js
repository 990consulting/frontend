/*
 * Copyright (c) 2019 Open990.org, Inc.. All rights reserved.
 */

import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

const color = {
  primary: {
    desaturated: '#6839d3',
    standard: '#8553ff',
    faded: '#9d75ff',
    original: '#6870B2',
    transparent: '#6839d324'
  },
  secondary: '#f9d924',
  black: '#000000',
  white: '#ffffff',
  red: '#cc0000',
  background: {
    desaturated: '#e3e3e3',
    faded: '#f5f5f5'
  },
  grey: {
    desaturated: '#9995a3',
    standard: '#cccccc',
    faded: '#dddddd',
  },
  green:{
    standard: '#A0D8CD'
  }
};

const border = {
  color: {
    primary: '#80bdff',
    secondary: '#ced4da',
    table: '#e0e0e0'
  }
};

const typography = {
  useNextVariants: true,
  fontFamily: {
    heading: `'Lato', sans-serif`,
    main: `'Roboto Condensed', sans-serif`,
    secondary: `"Raleway", sans-serif`
  },
  fontSize: {}
};

const open990 = {
  globalContainer: {
    maxWidth: 1440
  },
  pageContainer: {
    padding: '1.75rem 1.75rem 3.5rem 1.75rem',
    '@media (max-width: 599px)': {
      padding: '1rem'
    },
  },
  pageHeader: {
    textAlign: 'left',
    fontSize: '24px',
    fontWeight: 'bold'
  },
  pageTitle: {
    position: 'relative',
    '&:before': {
      position: 'absolute',
      content: '""',
      top: '50%',
      borderTop: `5px solid ${color.primary.desaturated}`,
      width: '100%',
      height: '0',
      left: 'auto',
      right: '0',
    },
    '&>h1, &>h2': {
      padding: '0 1rem',
      color: color.black,
      fontWeight: 600,
      lineHeight: 1.5,
      fontFamily: typography.fontFamily.main,
      background: color.background.faded,
      display: 'inline-block',
      position: 'relative',
      margin: 0
    },
    margin: '2rem 0'
  },
  pageContent: {
    textAlign: 'justify',
    lineHeight: 1.8,
    '& a': {
      textDecoration: 'none'
    },
    '& p': {
      marginTop: '1rem'
    },
  },
  link: {
    color: color.primary.original,
    '&:hover': {
      color: color.primary.desaturated
    }
  },
  drawerWidth: 320
};

const theme = createMuiTheme({
  open990,
  typography,
  border,
  color,
});

export default theme;