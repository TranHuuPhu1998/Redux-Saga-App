const styles = (theme) => ({
    drawerPaper: {
        width: 240,
        zIndex: 10,
        maxWidth: 240,
        height: '100%',
        position: 'relative',
    },
    menuNavLink: {
        textDecoration: 'none',
        color: '#000000'
    },
    menuNavLinkActive: {
        "&>div": {
            backgroundColor: '#cccccc'
        }
    }
});
export default styles;