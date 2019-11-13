export const styles = theme => ({
    absentWrapper: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: theme.color.primary.transparent,
        padding: '1rem',
        marginTop: '1.25rem',
        border: `1px solid ${theme.color.primary.desaturated}`,
        borderRadius: '4px',
        alignItems: 'center',
        '& p': {
            margin: 0,
            color: theme.color.primary.desaturated
        }
    },
    iconWrapper: {
        '& svg': {
            fontSize: '2rem',
            color: theme.color.primary.desaturated
        },
        [theme.breakpoints.down('sm')]: {
            marginBottom: '0.8rem',
            marginRight: 0,
        }
    },
    simpleWrapper: {
        lineHeight: 1.5,
        textAlign: 'left',
        backgroundColor: theme.color.white,
        marginTop: '1.5rem',
        color: theme.color.white,
        boxShadow: '0 2px 4px 0 #e3e3e3',
        '& h2': {
            margin: 0,
            fontSize: '1.125rem',
            padding: '0.78rem 1.8rem',
            backgroundColor: theme.color.primary.desaturated,

        },
        '& p': {
            padding: '1rem 1.8rem',
            margin: 0,
            color: theme.color.black,

        }
    },
    tableWrapper: {
        marginTop: '1.5rem',
        border: `1px solid ${theme.color.primary.desaturated}`,
        textAlign: 'left',
        '& h2': {
            padding: '1rem',
            backgroundColor: theme.color.primary.desaturated,
            color: theme.color.white,
            margin: 0,
            fontSize: '1.125rem',
        },
        '& p': {
            margin: 0,
            padding: '1rem',
            borderBottom: `1px solid ${theme.color.primary.desaturated}`
        },
        '& p:last-child': {
            border: 'none'
        },
        [theme.breakpoints.up('md')]: {
            '&.odd': {
                marginLeft: '1rem'
            },
            '&.even': {
                marginRight: '1rem'
            }
        }
    }
});
