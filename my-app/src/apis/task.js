import axiosService from './../common/Theme/axiosService';
import { API_ENDPOINT } from './../constants';
import qs from 'query-string';

const url = 'tasks';

//SERACH
export const getList = (params = {}) => {
    let queryParams = '';
    // kiểm tra params laf object rong
    if (Object.keys(params).length > 0) {
        queryParams = `?${qs.stringify(params)}`;
    }
    return axiosService.get(`${API_ENDPOINT}/${url}${queryParams}`);
}
//http://localhost:3000/tasks
export const addTask = data => {
    return axiosService.post(`${API_ENDPOINT}/${url}`, data);
}
//http://localhost:3000/tasks/:id mothods PUT
export const updateTask = (data, taskid) => {
    return axiosService.put(`${API_ENDPOINT}/${url}/${taskid}`, data);
}
//http://localhost:3000/tasks/:id mothods DELETE
export const deleteTask = taskid => {
    return axiosService.delete(`${API_ENDPOINT}/${url}/${taskid}`);
}