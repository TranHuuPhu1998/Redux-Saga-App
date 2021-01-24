import React, { Component } from "react";
import { withStyles, Button, Grid, Box, MenuItem } from "@material-ui/core";
import styles from "./style";
import PropsTypes from 'prop-types'

import { connect } from 'react-redux';
import * as modalActions from './../../actions/modal';
import * as taskActions from './../../actions/task';
import { compose, bindActionCreators } from 'redux';

import { Field, reduxForm } from 'redux-form'
import renderTextField from "../../components/FormHelper/TextFeild";

import validate from './validate.js'
import renderSelectField from "../../components/FormHelper/Select";


class TaskFrom extends Component {
  handleSubmitForm = data => {
    const { taskActionsCreators, taskEditing } = this.props;
    const { addTask, updateTask } = taskActionsCreators;
    const { title, description, status } = data;
    console.log('taskEditing', taskEditing)
    if (taskEditing && taskEditing.id) {
      updateTask(title, description, status)
    } else {
      addTask(title, description);
    }

  }
  required = value => {
    let error = 'Vui lòng nhập tiêu đề';
    if (value !== null && typeof value !== 'undefined' && value.trim() !== '') {
      error = null
    }
    return error;
  }
  minLenght5 = value => {
    let error = null;
    if (value.length < 5) {
      error = 'Tiêu đề phải từ 5 ký tự'
    }
    return error;

  }
  renderStatusSelection() {
    let xhtml = null;
    const { taskEditing, classes } = this.props;

    if (taskEditing && taskEditing.id) {
      xhtml = (
        <Field
          id="status"
          label="Trạng thái"
          name="status"
          className={classes.select}
          // validate={[this.required, this.minLenght5]}
          component={renderSelectField}
        >

          <MenuItem value={0}>ready</MenuItem>
          <MenuItem value={1}>In Progress</MenuItem>
          <MenuItem value={2}>Completed</MenuItem>
        </Field>
      )
    }
    return xhtml;
  }
  render() {
    const { classes,
      invalid,
      submitting,
      modalActionsCreators,
      handleSubmit,
      // taskEditing
    } = this.props;
    const { hideModal } = modalActionsCreators;

    return (
      <form onSubmit={handleSubmit(this.handleSubmitForm)}>
        <Grid className={classes.container}>
          <Grid item md={12}>
            <Field
              id="title"
              label="Tiêu đề"
              name="title"
              className={classes.TextField}
              margin="normal"
              // validate={[this.required, this.minLenght5]}
              component={renderTextField}
            // value={taskEditing ? taskEditing.title : ""}
            />
          </Grid>
          <Grid item md={12}>
            <Field
              id="description"
              name="description"
              label="mô tả"
              multiple
              rowsMax="4"
              className={classes.TextField}
              margin="normal"
              component={renderTextField}
            // value={taskEditing ? taskEditing.description : ""}
            />
          </Grid>
          {this.renderStatusSelection()}
        </Grid>
        <Grid item md={12}>
          <Box display="flex" flexDirection="row-reverse" mt={2}>
            <Box ml={1}>
              <Button disabled={invalid || submitting} color="primary" variant="contained" type="submit">
                Lưu Lại
      </Button>
            </Box>

            <Button variant="contained" onClick={hideModal} mf={1}>
              Hủy Bỏ
      </Button>
          </Box>

        </Grid>
      </form>

    );
  }
}


TaskFrom.propsTypes = {
  modalActionsCreators: PropsTypes.shape({
    hideModal: PropsTypes.func
  }),
  invalid: PropsTypes.bool,
  submitting: PropsTypes.bool,

}
const mapStateToProps = state => {
  return {
    taskEditing: state.tasks.taskEditing,
    initialValues: {
      title: state.tasks.taskEditing ? state.tasks.taskEditing.title : null,
      description: state.tasks.taskEditing ? state.tasks.taskEditing.description : null,
      status: state.tasks.taskEditing ? state.tasks.taskEditing.status : null,
    }
  }

};

const mapDispatchToProps = dispatch => {
  return {
    modalActionsCreators: bindActionCreators(modalActions, dispatch),
    taskActionsCreators: bindActionCreators(taskActions, dispatch)
  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const FORM_NAME = 'TASK_MANAGEMENT';

const withReduxForm = reduxForm({
  form: FORM_NAME,
  validate
})

export default compose(
  withStyles(styles),
  withConnect,
  withReduxForm
)(TaskFrom);

