import * as uiTypes from './../constants/ui';

export const showLoading = () => ({
    type: uiTypes.SHOW_LOADING,
});

export const hideLoading = () => ({
    type: uiTypes.HIDF_LOADING
})

export const showSideBar = () => ({
    type: uiTypes.SHOW_SIDEBAR,
});

export const hideSideBar = () => ({
    type: uiTypes.HIDF_SIDEBAR
})
