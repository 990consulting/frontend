/*
 * Copyright (c) 2019 Open990.org, Inc.. All rights reserved.
 */

export const styles = theme => ({
  banner: {
    backgroundColor: theme.color.primary.desaturated,
    '& h1': {
      minHeight: '4.75rem',
      margin: 0,
      padding: '13vh 1rem 0rem',
      color: theme.color.white,
      fontSize: '2.25rem',
      [theme.breakpoints.down('xs')]: {
        fontSize: '2rem',
      },
      '& span': {
        color: theme.color.secondary,
        fontSize: '3.8rem',
        [theme.breakpoints.down('xs')]: {
          fontSize: '3.38rem',
        }
      }
    }
  },
  bannerContainer: {
    justifyContent: 'center'
  },
  modifyContainer: {
    marginTop: '3.4375rem'
  },
  bannerSearch: {
    padding: '0 !important'
  },
  bannerTextField: {
    width: '100%'
  },
  bannerInputIcon: {
    color: theme.color.primary.standard,
    fontSize: '2.5rem',
    [theme.breakpoints.down('xs')]: {
      fontSize: '2rem',
    },
  },
  bannerAdvancedSearch: {
    fontSize: '15px',
    fontWeight: '500',
    textAlign: 'left',
    '& a': {
      color: theme.color.white,
      // fontSize: '0.875rem',
      textDecoration: 'underline',
    },
    '&:last-child': {
      padding: '11px 0 10vh !important',
      color: theme.color.white,
      // fontSize: '0.875rem',
    },
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
  belowSearchText: {
    marginTop: '10px',
    fontWeight: '500',
    fontSize: '15px'
  }
});