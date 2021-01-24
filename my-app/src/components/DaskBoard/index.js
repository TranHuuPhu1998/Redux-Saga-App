import React, { Component } from 'react';
import styles from './styles.js';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import Header from './Header';
import SideBar from './SideBar';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import * as uiActions from './../../actions/ui';
import cn from 'classnames';
class DaskBoard extends Component {
    onToggleSidebar = value => {
        const { uiActionCreators } = this.props;
        const { showSideBar, hideSideBar } = uiActionCreators;
        if (value === true) {
            showSideBar();
        }
        else {
            hideSideBar();
        }
    }
    render() {
        const { children, classes, name, showSidebar, onToggleSidebar } = this.props;
        return (
            <div className={classes.dashboard}>
                <Header name={name} showSidebar={showSidebar} onToggleSidebar={this.onToggleSidebar} />
                <div className={classes.wrapper}>
                    <SideBar showSidebar={showSidebar}
                        onToggleSidebar={this.onToggleSidebar}
                    />
                    <div className={cn(classes.wrapperContent, {
                        [classes.shiftLeft]: showSidebar === false
                    })}>
                        {children}
                    </div>
                </div>


            </div>
        );
    }
}
DaskBoard.propTypes = {
    children: PropTypes.object,
    classes: PropTypes.object,
    name: PropTypes.string,
    showSidebar: PropTypes.bool
}

const mapStateToProps = state => {
    return {
        showSidebar: state.ui.showSidebar
    }
}

const mapDispatchToProps = dispatch => {
    return {
        uiActionCreators: bindActionCreators(uiActions, dispatch)
    }
}

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
)

export default compose(
    withConnect,
    withStyles(styles)
)(DaskBoard);