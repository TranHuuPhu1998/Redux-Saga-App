import React, { Component } from 'react';

import { withStyles, Modal } from '@material-ui/core';
import PropsTypes from 'prop-types';
import ClearIcon from "@material-ui/icons/Clear";
import { connect } from 'react-redux';
import * as modalActions from './../../actions/modal';
import { compose, bindActionCreators } from 'redux';
import styles from './styles';
class CommonModal extends Component {
    render() {
        const { classes, open, component, modalActionsCreators, title } = this.props;
        const { hideModal } = modalActionsCreators
        return (
            <div>
                <Modal open={open} onClose={hideModal}>
                    <div className={classes.modal}>
                        <div className={classes.header}>
                            <span className={classes.title}>
                                {title}
                            </span>
                            <ClearIcon onClick={hideModal} className={classes.icon} />
                        </div>
                        <div className={classes.content}>
                            {component}
                        </div>
                    </div>

                </Modal>
            </div>
        );
    }
}
Modal.propsTypes = {
    title: PropsTypes.string,
    classes: PropsTypes.object,
    open: PropsTypes.bool,
    modalActionsCreators: PropsTypes.shape({
        hideModal: PropsTypes.func
    }),
    component: PropsTypes.object
}
const mapStateToProps = state => ({
    open: state.modal.showModal,
    component: state.modal.component,
    title: state.modal.title
});

const mapDispatchToProps = dispatch => {
    return {
        modalActionsCreators: bindActionCreators(modalActions, dispatch),
    }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
    withStyles(styles),
    withConnect
)(CommonModal);