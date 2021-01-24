import { withStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import React, { Component } from 'react';
import styles from './styles.js';

const menuId = 'primary-search-account-menu';
const mobileMenuId = 'primary-search-account-menu-mobile';

class Header extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            anchorEl: null,
        }
    }

    handleProfileMenuOpen = (e) => {
        this.setState({
            anchorEl: e.currentTarget
        })
    }
    handleProfileMenuClose = () => {
        console.log("handleProfileMenuOpen");
    }
    handleMenuClose = () => {
        this.setState({
            anchorEl: null
        })
    }
    renderMenu = () => {
        const { anchorEl } = this.state;
        const isMenuOpen = Boolean(anchorEl);
        return (
            <Menu
                anchorEl={anchorEl}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                id={menuId}
                keepMounted
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={isMenuOpen}
                onClose={this.handleMenuClose}
            >
                <MenuItem onClick={this.handleMenuClose}>Logout</MenuItem>

            </Menu>
        )
    }
    handletoggleSidebar = () => {
        const { showSidebar, onToggleSidebar } = this.props;
        if (onToggleSidebar) {
            onToggleSidebar(!showSidebar)
        }

    }
    render() {
        const { classes, name } = this.props;
        return (
            <div className={classes.grow}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            edge="start"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="open drawer"
                            onClick={this.handletoggleSidebar}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography className={classes.title} variant="h6" noWrap>
                            {name}
                        </Typography>
                        <div className={classes.grow} />
                        <div className={classes.sectionDesktop}>

                            <IconButton
                                edge="end"
                                aria-label="account of current user"
                                aria-controls={menuId}
                                aria-haspopup="true"
                                onClick={this.handleProfileMenuOpen}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>
                {this.renderMenu()}
            </div>
        );
    }
}

export default withStyles(styles)(Header);