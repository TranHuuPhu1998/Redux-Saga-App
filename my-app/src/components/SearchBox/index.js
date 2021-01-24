import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles'
import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';

class SearchBox extends Component {
    render() {
        const { classes, handleChange } = this.props;
        return (
            <form className={classes.container} noValidate autoComplete="off">
                <TextField
                    autoComplete="off"
                    className={classes.TextField}
                    margin="normal"
                    onChange={handleChange}
                    placeholder="nhập từ khóa"
                />
            </form>
        );
    }
}
SearchBox.propTypes = {
    classes: PropTypes.object,
    handleChanse: PropTypes.func
}

export default withStyles(styles)(SearchBox);