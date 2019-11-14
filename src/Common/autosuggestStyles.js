/*
 * Copyright (c) 2019 Open990.org, Inc.. All rights reserved.
 */

export const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  container: {
    position: 'relative',
  },
  suggestionsContainerOpen: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0,
    '& div':{
      textOverflow: 'ellipsis',
      overflow: 'hidden',
    }
  },
  smallSuggestionsContainerOpen: {
    width: '17.5rem',
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing.unit,
    top: '2.7rem',
    right: 0,
    fontSize: '0.9rem',
    [theme.breakpoints.down('xs')]: {
      width: '15rem',
    },
    '& div':{
      textOverflow: 'ellipsis',
      overflow: 'hidden',
    }
  },
  suggestion: {
    display: 'block',
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none',
  },
  divider: {
    height: theme.spacing.unit * 2,
  },
  bannerSearch: {
    padding: '0 !important'
  },
  bannerTextField: {
    width: '100%'
  },
  smallBannerTextField: {
    width: '17.5rem',
    height: '3rem',
    [theme.breakpoints.down('xs')]: {
      width: '15rem',
      height: '2rem'
    }
  },
  smallContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    position: 'relative',
  },
  bannerInputIcon: {
    color: theme.color.primary.standard,
    fontSize: '2.5rem',
    [theme.breakpoints.down('xs')]: {
      fontSize: '2rem',
    },
    cursor: 'pointer'
  },
  bannerAdvancedSearch: {
    textAlign: 'left',
    padding: '11px 0 10vh !important',
    color: theme.color.white,
    fontSize: '0.875rem',
    textDecoration: 'underline'
  },
  bootstrapRoot: {
    borderRadius: '0 0 4px 4px',
    height: '4rem',
    backgroundColor: theme.palette.common.white,
    border: `1px solid ${theme.border.color.secondary}`,
    fontSize: 16,
    padding: '0 12px',
    display: 'flex',
    alignItems: 'center',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      borderColor: theme.border.color.primary,
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
    [theme.breakpoints.down('xs')]: {
      height: '3rem',
    }
  },
  smallbootstrapRoot: {
    borderRadius: 0,
    height: '4rem',
    backgroundColor: theme.palette.common.white,
    border: `1px solid ${theme.border.color.secondary}`,
    fontSize: 16,
    padding: '0 12px',
    display: 'flex',
    alignItems: 'center',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      borderColor: theme.border.color.primary,
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
    [theme.breakpoints.down('xs')]: {
      height: '2rem',
    }
  }
});