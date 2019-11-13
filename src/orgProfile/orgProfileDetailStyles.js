export const styles = (theme) => ({
  root: {},
  table: {
    overflowX: 'auto',
    display: 'block'
  },
  expansionDetails: {
    display: 'flex',
    flexDirection: 'column',
    padding: '8px 0 24px 24px'
  },
  expanded: {
    margin: 0,
    background: `${theme.color.white} !important`
  },
  summaryRoot: {
    '&:hover': {
      background: theme.color.background.desaturated
    }
  },
  summaryIcon: {
    color: theme.color.white
  },
  summary: {
    background: theme.color.primary.desaturated,
    '&:hover': {
      backgroundColor: `${theme.color.primary.desaturated} !important`
    }
  },
  summaryContent: {
    textAlign: 'left',
    fontFamily: theme.typography.fontFamily.heading,
    backgroundColor: theme.color.primary.desaturated,
    fontSize: '1.125rem',
    fontStyle: 'normal',
    '&>p': {
      fontWeight: 'bold',
      color: `${theme.color.white} !important`
    }
  },
  content: {
    textAlign: 'left'
  },
  structureWrapper: {
    boxShadow: '0 2px 4px 0 #e3e3e3',
  },
  tableRow: {
    border: `1px solid ${theme.color.grey.standard}`,
    '& td': {
      borderLeft: `1px solid ${theme.color.grey.standard}`,
    }
  },
  periodsTableRow: {
    backgroundColor: theme.color.background.desaturated,
    border: `1px solid ${theme.color.grey.standard}`,
    '& td': {
      textAlign: 'center',
      borderLeft: `1px solid ${theme.color.grey.standard}`,
    }
  },
  tableCell: {
    textAlign: 'center',
    width: '6rem',
    [theme.breakpoints.up('sm')]: {
      wordBreak: 'break-word'
    }
  },
  tableCellName: {
    textAlign: 'left',
    width: 'auto'
  },
  tbody: {
    display: 'inline-table',
    width: '98%'
  }
});
