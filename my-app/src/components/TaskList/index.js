import React, { Component } from "react";
import { withStyles, Grid, Box } from "@material-ui/core";
import styles from "./style";
import TaskItem from "../TaskItem";
import PropTypes from 'prop-types';

class TaskList extends Component {
  render() {
    const { classes, tasks, status, onClickEdit, onClickDelete } = this.props;
    return (
      <Grid item md={4} xs={12} key={status.value} >
        <Box mt={2} mb={2} className={classes.color}>
          <div className={classes.status}>{status.lable}</div>
        </Box>
        <div >
          {tasks.map(task => {
            return (
              <TaskItem
                styles={{ marginTop: '10px' }}
                key={task.id}
                task={task}
                status={status}
                onClickEdit={() => onClickEdit(task)}
                onClickDelete={() => onClickDelete(task)}
              ></TaskItem>
            );
          })}
        </div>
      </Grid>
    );
  }
}

TaskList.propTypes = {
  classes: PropTypes.object,
  tasks: PropTypes.array,
  status: PropTypes.object,
  onClickEdit: PropTypes.func
}

export default withStyles(styles)(TaskList);
