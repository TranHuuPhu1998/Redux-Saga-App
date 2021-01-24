import React, { Component } from 'react';
import styles from './styles.js';
import { NavLink } from 'react-router-dom'
import { withStyles, Drawer, List, ListItem } from '@material-ui/core';
import { ADMIN_ROUTES } from './../../../constants';
class SideBar extends Component {


    toggleDrawer = value => {
        const { onToggleSidebar } = this.props;

        if (onToggleSidebar) {
            onToggleSidebar(value);
        }
    }
    renderList() {
        const { classes } = this.props;

        let xhtml = null;
        xhtml = (
            <div className={classes.list}>
                <List component="nav">
                    {
                        ADMIN_ROUTES.map(item => {
                            console.log('item', item.name)
                            return (
                                <NavLink
                                    to={item.path}
                                    exact={item.exact}
                                    className={classes.menuNavLink}
                                    activeClassName={classes.menuNavLinkActive}
                                    key={item.path}
                                >
                                    <ListItem key={item.path} button>
                                        {item.name}
                                    </ListItem>
                                </NavLink>
                            )
                        })
                    }
                </List>
            </div>
        );
        return xhtml;
    }

    render() {
        const { classes, showSidebar } = this.props;
        return (
            <Drawer
                open={showSidebar}
                onClose={() => this.toggleDrawer(false)}
                classes={{
                    paper: classes.drawerPaper
                }}
                variant="persistent"
            >
                {this.renderList()}
            </Drawer>
        );
    }
}

export default withStyles(styles)(SideBar);