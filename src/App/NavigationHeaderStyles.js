/*
 * Copyright (c) 2019 Open990.org, Inc.. All rights reserved.
 */

export const styles = (theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  navMenu: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& a': {
      color: theme.color.black,
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      fontSize: '1.125rem'
    }
  },
  searchMenu: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '20vw',
    height: '3rem'
  },
  logoMenu: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'center',
    },
    '& img': {
      width: '9rem',
      [theme.breakpoints.down('xs')]: {
        width: '7rem',
      },
    },
  },
  menuIcon: {
    color: theme.color.primary.desaturated
  },
  searchIcon: {
    color: theme.color.primary.standard,
    fontSize: '2.5rem',
    [theme.breakpoints.down('xs')]: {
      fontSize: '2rem'
    }
  },
  modifyMenuIcon: {
    width: '15px',
    paddingLeft: '5px'
  },
  bootstrapRoot: {
    width: '19.0625rem',
    [theme.breakpoints.down('md')]: {
      width: '15rem',
    },
    borderRadius: 0,
    backgroundColor: theme.color.white,
    border: `1px solid ${theme.border.color.secondary}`,
    fontSize: '1rem',
    padding: '5px 10px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      borderColor: theme.border.color.primary,
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)'
    }
  },
  icon: {
    display: 'flex',
    justifyContent: 'flex-start',
    '& span': {
      display: 'flex',
      justifyContent: 'center'
    },
    cursor: 'pointer'
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    '& a': {
      color: 'black',
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      fontSize: '1.125rem',
      paddingRight: '1rem',
      
    },
    '& a:last-child': {
      paddingRight: '0',
    }
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    '& a': {
      padding: '1rem',
      color: 'black',
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      fontSize: '1.125rem',
      borderTop: '1px solid grey'
    },
    '&:focus': {
      outline: 'none'
    }
  },
  buttonLink: {
    fontSize: '1.125rem',
    textTransform: 'none',
    fontFamily: theme.typography.fontFamily.main,
    paddingLeft: 0,
    '&:hover': {
      backgroundColor: theme.color.white
    }
  },
  simpleLink: {
    paddingRight: '1rem',
    [theme.breakpoints.down('xs')]: {
      '& a': {
        fontSize: '0.9rem',
        padding: 0,
        borderTop: 'none'
      }
    }
  },
  menuItem: {
    paddingTop: '0.3rem',
    paddingBottom: '0.3rem',
    '& a': {
      fontSize: '0.9rem'
    }
  },
  button: {
    padding: 0,
    minWidth: 'auto'
  },
  menuListItem: {
    padding: '4px 16px',
  }
});
