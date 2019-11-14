/*
 * Copyright (c) 2019 Open990.org, Inc.. All rights reserved.
 */

export const styles = (theme) => ({
  paper: {
    minWidth: '18rem',
    maxWidth: '23.75rem',
    position: 'relative',
    textAlign: 'center',
    borderRadius: 0,
    [theme.breakpoints.down('xs')]: {
      margin: '2rem 1rem 0 1rem',
    },
    [theme.breakpoints.only('sm')]: {
      marginTop: '2.25rem',
      minWidth: '35rem',
    },
    [theme.breakpoints.only('md')]: {
      maxWidth: '18rem',
    },
    
  },
  title: {
    minHeight: theme.spacing.unit,
    backgroundColor: theme.color.primary.desaturated
  },
  titleText: {
    fontFamily: theme.typography.fontFamily.heading,
    backgroundColor: theme.color.primary.desaturated,
    padding: '0.93rem 1.8rem',
    fontSize: '1.125rem',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'condensed',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: theme.color.white,
    display: 'flex',
    alignItems: 'center',
    margin: 0
  },
  header: {
    fontSize: '18px',
    textTransform: 'uppercase'
  },
  link: {
    textDecoration: 'none',
    '& a': {
      ...theme.open990.link,
    },
  },
  paragraphLink: {
    '& a': {
      ...theme.open990.link,
      textDecoration: 'none'
    },
    [theme.breakpoints.down('lg')]: {
      display: 'flex',
      flexDirection: 'column',
    },
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'row',
    },
  },
  button: {
    width: '70%',
    height: '52px',
    marginBottom: '1vh',
    borderColor: theme.color.primary.desaturated,
    '& span': {
      textTransform: 'Capitalize',
      color: theme.color.primary.desaturated,
      fontSize: '1.125rem',
      fontWeight: 'bold'
    }
  },
  // This classNames used for extending default classes declared above from outside components
  extendedPaper: {},
  extendedRibbonCard: {},
  extendedCardContent: {},
  extendedTitle: {},
  extendedHeader: {},
  extendedText: {},
  extendedLink: {},
  extendedButton: {},
  
  // Added by DBB
  expansionPanel: {
    marginTop: '1.5rem'
  },
  
  expansionPanelSummary: {
    minHeight: 60,
    maxHeight: 60,
    '&$expanded': {
      marginTop: '1.5rem',
      minHeight: 60,
      maxHeight: 60,
    },
  }
});
