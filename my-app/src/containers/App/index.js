// import Button from '@material-ui/core/Button';
import { withStyles } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import React, { Component } from "react";
//redux
import { Provider } from "react-redux";
import theme from "../../common/Theme/index";
import configureStore from "../../redux/configureStore";
import Modal from "../../components/Modal";
import styles from "./styles.js";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GlobalLoading from '../../components/GlobalLoading/index';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ADMIN_ROUTES } from '../../constants';
import AdminLayoutRoute from "../../common/Layout/AdmiLayoutRoute";
import { CssBaseline } from '@material-ui/core';

const store = configureStore();

class App extends Component {
    renderAdminRoutes() {
        let xhtml = null;
        xhtml = ADMIN_ROUTES.map((route) => {
            return (
                <AdminLayoutRoute
                    key={route.path}
                    path={route.path}
                    component={route.component}
                    exact={route.exact}
                    name={route.name}
                />
            )
        });
        return xhtml;
    }
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <ThemeProvider theme={theme}>
                        <CssBaseline />
                        <ToastContainer></ToastContainer>
                        <GlobalLoading></GlobalLoading>
                        <Modal></Modal>
                        <Switch>
                            {this.renderAdminRoutes()}
                        </Switch>
                    </ThemeProvider>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default withStyles(styles)(App);
