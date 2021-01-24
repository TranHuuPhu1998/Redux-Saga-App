import React, { Component } from 'react';
import styles from './style';
import {
    withStyles,
    Grid,
    Card,
    CardActions,
    CardContent,
    Typography,
} from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';


class TaskItem extends Component {
    render() {
        const { classes, task, status, onClickEdit, onClickDelete } = this.props;
        const { id, title, description } = task;
        return (
            <Card key={id} className={classes.cart}>
                <CardContent>
                    <Grid container justify="space-between">
                        <Grid item md={7}>
                            <Typography>
                                {title}
                            </Typography>
                        </Grid>
                        <Grid item md={5}>
                            {status.lable}
                        </Grid>
                    </Grid>
                    <p>{description}</p>
                </CardContent>
                <CardActions className={classes.CardActions}>
                    <Fab
                        color="primary"
                        aria-label="add"
                        size="small"
                        onClick={onClickDelete}
                    >
                        <DeleteIcon />
                    </Fab>
                    <Fab
                        color="secondary"
                        aria-label="edit"
                        size="small"
                        onClick={onClickEdit}
                    >

                        <EditIcon />
                    </Fab>
                </CardActions>
            </Card>
        );
    }
}

export default withStyles(styles)(TaskItem);