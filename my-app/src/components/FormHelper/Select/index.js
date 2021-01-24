import React from "react";
import { Select, InputLabel, FormControl, FormHelperText, withStyles } from "@material-ui/core";
import PropsTypes from 'prop-types';
import styles from './styles';

const renderFromHelper = ({ touched, error }) => {
    if (!(touched && error)) {
        return null;
    } else {
        return <FormHelperText>{touched && error}</FormHelperText>
    }
}
renderFromHelper.propTypes = {
    touched: PropsTypes.bool
}

const renderSelectField = ({
    classes,
    input,
    label,
    meta: { touched, error },
    children,
    ...custom
}) => (
        <FormControl className={classes.formControl} error={touched && error}>
            <InputLabel htmlFor="color-native-simple">{label}</InputLabel>
            <Select
                {...input}
                {...custom}
                inputProps={{
                    name: input.name,
                    id: 'color-native-simple'
                }}
                value={input.value}
            >
                {children}
            </Select>
            {renderFromHelper({ touched, error })}
        </FormControl>
    )

renderSelectField.propTypes = {
    label: PropsTypes.string,
    input: PropsTypes.object,
    meta: PropsTypes.object
};

export default withStyles(styles)(renderSelectField);