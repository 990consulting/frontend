const pageStyles = theme => ({
  root: {
    ...theme.open990.pageContainer,
    padding: '0 1.75rem 1.75rem'
  },
  policyHeader: {
    ...theme.open990.pageTitle,
    margin: '1rem 0',
    fontSize: 'initial'
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: '1.2rem'
  },
  textContent: {
    maxWidth: '80%',
    fontWeight: 300,
    lineHeight: 'normal',
    textAlign: 'center',
    margin: '0 auto 1.875rem auto'
  },
  button: {
    display: 'block',
    margin: '1.875rem auto',
    width: '100%',
    maxWidth: '30rem',
    height: '52px',
    backgroundColor: theme.color.primary.desaturated,
    '& span': {
      textTransform: 'Capitalize',
      color: '#fff',
      fontSize: '1.125rem',
      fontWeight: 'bold'
    },
    '&:hover': {
      backgroundColor: theme.color.primary.standard
    }
  },
  accentElement: {
    color: '#6839d3',
    cursor: 'pointer'
  }
});

export default pageStyles;