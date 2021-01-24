import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import DaskBoard from './../../../components/DaskBoard';
import PropTypes from 'prop-types';
class AdminLayoutRoute extends Component {
    render() {
        const { component: YouComponent, ...remainProps } = this.props;
        return (
            <Route
                {...remainProps}
                render={
                    routeProps => {
                        return (
                            <DaskBoard  {...remainProps}>
                                <YouComponent {...remainProps} />
                            </DaskBoard>
                        )
                    }
                }
            />
        );

    }


}
AdminLayoutRoute.propTypes = {
    path: PropTypes.string,
    exact: PropTypes.bool,
    name: PropTypes.string
}

export default AdminLayoutRoute;