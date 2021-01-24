
import * as taskConstans from '../constants/task';
import { STATUSES } from '../constants';
// FETCdelete

export const fetchListTask = (params = {}) => {
    return {
        type: taskConstans.FETCH_TASK,
        payload: {
            params,
        }
    };
}

export const fetchListTaskSuccess = data => {
    return {
        type: taskConstans.FETCH_TASK_SUCCESS,
        payload: {
            data
        }
    }
}

export const fetchListTaskFailed = error => {

    return {
        type: taskConstans.FETCH_TASK_FAILED,
        payload: {
            error
        }
    }
}

export const filterTask = keyword => ({
    type: taskConstans.FILTER_TASK,
    payload: {
        keyword,
    },
});

export const filterTaskSuccess = data => ({
    type: taskConstans.FILTER_TASK_SUCCESS,
    payload: {
        data,
    },
});

//ADD DATA
export const addTask = (title, description) => {
    return {
        type: taskConstans.ADD_TASK,
        payload: {
            title,
            description
        }
    }
}

export const addTaskSuccess = data => ({
    type: taskConstans.ADD_TASK_SECCESS,

    payload: {
        data,
    },
});

export const addTasksFaild = error => ({
    type: taskConstans.ADD_TASK_FAILED,
    payload: {
        error,
    },
});


export const setTaskEditing = task => ({
    type: taskConstans.SET_TASK_EDITING,
    payload: {
        task,
    },
});
//UPDATE TASK

export const updateTask = (title, description, status = STATUSES[0].value) => {
    return {
        type: taskConstans.UPDATE_TASK,
        payload: {
            title,
            description,
            status
        }
    }
}

export const updateTaskSuccess = data => ({
    type: taskConstans.UPDATE_TASK_SECCESS,
    payload: {
        data,
    },
});

export const updateTasksFaild = error => ({
    type: taskConstans.UPDATE_TASK_FAILED,
    payload: {
        error,
    },
});

//DELETE TASK

export const deleteTask = id => {
    return {
        type: taskConstans.DELETE_TASK,
        payload: {
            id
        }
    }
}

export const deleteTaskSuccess = data => ({
    type: taskConstans.DELETE_TASK_SECCESS,
    payload: {
        data,
    },
});

export const deleteTasksFaild = error => ({
    type: taskConstans.DELETE_TASK_FAILED,
    payload: {
        error,
    },
});









/*
B1 fetchListTaskRequest()
B2 Reset : state tasks => []
B3 fetchListTaskSuccess(data response)
*/
// export const fetchListTaskRequest =()=>{
//     return dispatch =>{
//         dispatch(fetchListTask())
//         taskApis.getList()
//         .then(resp =>{
//             const {data} = resp;
//             dispatch(fetchListTaskSuccess(data))
//         }).catch(error=>{
//             dispatch(fetchListTaskFailed(error))
//         });
//     };
// };