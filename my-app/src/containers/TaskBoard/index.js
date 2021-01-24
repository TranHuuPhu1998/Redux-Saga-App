import { Button, Grid, withStyles, Box } from "@material-ui/core";
import Addicon from "@material-ui/icons/Add";
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import TaskFrom from "../TaskFrom/index.js";
import { STATUSES } from "../../constants/index.js";
import * as taskActions from './../../actions/task';
import * as modalActions from './../../actions/modal';
import TaskList from "./../../components/TaskList/index";
import SearchBox from "./../../components/SearchBox/index";
import PropTypes from 'prop-types';
import styles from "./styles.js";
class TaskBoard extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            open: false
        };
    }
    LoadData = () => {
        const { taskActionsCreators } = this.props;
        const { fetchListTask } = taskActionsCreators;
        fetchListTask();
    }
    componentDidMount() {
        const { taskActionsCreators } = this.props;
        const { fetchListTask } = taskActionsCreators;
        fetchListTask();
    }
    handleEditTask = task => {
        const { taskActionsCreators, modalActionCreators } = this.props;
        const { setTaskEditing } = taskActionsCreators;
        setTaskEditing(task);

        const { showModal, changeModalContent, changeModalTitle } = modalActionCreators;
        showModal();
        changeModalTitle('Cập Nhật Công Việc .');
        changeModalContent(<TaskFrom />);
    }
    showModalDeleteTask = task => {
        const {
            classes,
            modalActionCreators
        } = this.props;

        const {
            showModal,
            changeModalContent,
            changeModalTitle,
            hideModal,
        } = modalActionCreators;
        showModal();
        changeModalTitle('Xóa Công việc.');
        changeModalContent(
            <div className={classes.modalDelete}>
                <div className={classes.modalConfirmText}>
                    Bạn Chắc chắn muốn xóa &nbsp;
                    <span className={classes.modalConfirmTextBo}>
                        {task.title}
                    </span>?
                </div>
                <Box display="flex" flexDirection="row-reverse" mt={2}>
                    <Box ml={1}>
                        <Button
                            variant="contained"
                            onClick={hideModal}
                        >Hủy Bỏ</Button>
                    </Box>
                    <Box>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => this.handleDeleteTask(task)}
                        >
                            Đồng ý
                        </Button>
                    </Box>
                </Box>
            </div>
        );
    }
    handleDeleteTask(task) {
        const { id } = task;
        const { taskActionsCreators } = this.props;
        const { deleteTask } = taskActionsCreators;
        deleteTask(id);
    }
    renderTaskBorad() {
        let { listTask } = this.props;
        let xhtml = null;
        xhtml = (
            <Grid container spacing={2}>
                {STATUSES.map((status, index) => {
                    var taskFiltered = listTask.filter(
                        task => task.status === status.value
                    );

                    return (
                        <TaskList
                            key={index}
                            tasks={taskFiltered}
                            status={status}
                            onClickEdit={this.handleEditTask}
                            onClickDelete={this.showModalDeleteTask}
                        ></TaskList>
                    );
                })}
            </Grid>
        );
        return xhtml;
    }
    handleClose = () => {
        this.setState({
            open: false
        });
    };
    openFrom = () => {
        const { modalActionCreators, taskActionsCreators } = this.props;
        const { setTaskEditing } = taskActionsCreators;
        setTaskEditing(null)

        const { showModal, changeModalContent, changeModalTitle } = modalActionCreators;
        showModal();
        changeModalTitle('Thêm mới công việt .');
        changeModalContent(<TaskFrom />);
    };
    // renderFrom() {
    //     const { open } = this.state;
    //     let xhtml = null;
    //     xhtml = <TaskFrom open={open} onClose={this.handleClose}></TaskFrom>;
    //     return xhtml;
    // }

    handleFilter = (e) => {
        const { value } = e.target;
        const { taskActionsCreators } = this.props;
        const { filterTask } = taskActionsCreators;

        filterTask(value);
    }

    renderSearchBox() {
        let xhtml = null;
        xhtml = (
            <SearchBox handleChange={this.handleFilter} />
        )
        return xhtml;
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.TaskBoard}>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.Button}
                    onClick={this.LoadData}
                >
                    LoadData
                    </Button>

                <Button
                    variant="contained"
                    color="primary"
                    className={classes.Button}
                    onClick={this.openFrom}
                >
                    <Addicon></Addicon>Thêm Mới Công Việt
                </Button>
                {this.renderSearchBox()}

                {this.renderTaskBorad()}
                {/* {this.renderFrom()} */}
            </div>
        );
    }
}


TaskBoard.propTypes = {
    classes: PropTypes.object,
    modalActionCreators: PropTypes.shape({
        showModal: PropTypes.func,
        hideModal: PropTypes.func,
        changeModalTitle: PropTypes.func,
        changeModalContent: PropTypes.func,
    })
}
const mapStateToProps = state => {
    return {
        listTask: state.tasks.listTask
    }
};
const mapDispatchToProps = dispatch => {
    return {
        taskActionsCreators: bindActionCreators(taskActions, dispatch),
        modalActionCreators: bindActionCreators(modalActions, dispatch)
    }
}


export default withStyles(styles)(
    connect(mapStateToProps, mapDispatchToProps)(TaskBoard)
);
