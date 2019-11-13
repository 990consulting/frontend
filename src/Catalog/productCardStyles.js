export const styles = (theme) => ({
    paper: {
        position: 'relative',
        minHeight: '21rem',
        height: '100%',
        '&>div': {
            height: '100%'
        },
        borderRadius: 0
    },
    header: {
        backgroundColor: theme.color.primary.desaturated,
        fontSize: '1.2rem',
        padding: '0.8rem',
        display: 'flex',
        textAlign: 'left',
        alignItems: 'center',
        color: theme.color.white
    },
    headerIcon: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        width: '1.8rem'
    },
    cardContent: {
        lineHeight: 1.5,
        padding: '2.5rem 1.5rem',
        textAlign: 'left',
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.up('sm')]: {
            height: 'calc(100% - 7rem)'
        }
    },
    buttonWrapper: {
        textAlign: 'center',
        marginBottom: '1.5rem',
        justifyContent: 'center'
    },
    button: {
        height: '100%',
        borderRadius: 0,
        fontSize: '0.8rem',
        textTransform: 'inherit',
        maxWidth: '10rem',
        width: '100%',
        backgroundColor: theme.color.primary.desaturated,
        color: theme.color.white,
        '&:hover': {
            backgroundColor: theme.color.primary.standard
        },
        [theme.breakpoints.down('sm')]: {
            maxWidth: '8rem',
        },
        '& a': {
            color: theme.color.white,
            textDecoration: 'none'
        }
    },
    action: {
        display: 'flex',
        alignItems: 'flex-end'
    }
});
