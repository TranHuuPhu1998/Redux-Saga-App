import { fork, take, call, put, delay, takeLatest, takeEvery, select } from 'redux-saga/effects';
import * as taskTypes from './../constants/task';
import { getList, addTask, updateTask, deleteTask } from './../apis/task';
import { STATUSES_CODE, STATUSES } from './../constants';
import {
    fetchListTaskFailed,
    fetchListTaskSuccess,
    // filterTaskSuccess,
    addTaskSuccess,
    addTasksFaild,
    fetchListTask,
    updateTaskSuccess,
    updateTasksFaild,
    deleteTaskSuccess,
    deleteTasksFaild
} from '../actions/task';
import { showLoading, hideLoading } from '../actions/ui';
import { hideModal } from '../actions/modal';
/**
 * Thực thi action fetch task
 * Gọi api
 * Hiển thị thanh laoding
 * kiểm tra status code
 * Nếu thành công ...
 * Mếu thất bại
 * tắc loading
 * thực thi các công việc tiếp theo
 */

function* watchFetchListTaskAction() {
    while (true) {

        const action = yield take(taskTypes.FETCH_TASK);
        //khi FETCH_TASK được dispatch thi code từ đây trở xuống đc thực thi
        yield put(showLoading());
        console.log('action', action)
        const { params } = action.payload;
        /* ------------Blocking------------------- */
        console.log('watching fetch list task action');
        const resp = yield call(getList, params)
        /*--------------Blocking cho đến khi call xong */
        const { status, data } = resp;
        if (status === STATUSES_CODE.SUCCESS) {
            //dispatch action fetchListTaskSuccess
            yield put(fetchListTaskSuccess(data))
        } else {
            //dispatch action fetchListTaskFailed
            yield put(fetchListTaskFailed(data))
        }
        yield delay(1000);
        yield put(hideLoading())
    }

}

// function* watchCreateTaskAction() {
//     console.log('watching create task action');
// theo gioi action 
// takeLatest gioi action va dispatch action
// }

function* filterTaskSaga({ payload }) {
    yield delay(500);
    console.log('payload', payload)
    const { keyword } = payload;
    // const list = yield select(state => state.tasks.listTask);
    // const filteredTask = list.filter(task => task.title.trim().toLowerCase().includes(keyword.trim().toLowerCase()))
    // yield put(filterTaskSuccess(filteredTask))

    yield put(fetchListTask({ q: keyword }))
}
//add
function* addTaskSaga({ payload }) {

    const { title, description } = payload;
    yield put(showLoading());
    const resp = yield call(addTask, {
        title,
        description,
        status: STATUSES[0].value,
    });

    console.log(resp);

    const { data, status } = resp;
    if (status === STATUSES_CODE.CREATED) {
        yield put(addTaskSuccess(data))
        yield put(hideModal())
    } else {
        yield put(addTasksFaild(data))
    }
    yield delay(1000);
    yield put(hideLoading())
}
//update
function* updateTaskSaga({ payload }) {

    const { title, description, status } = payload;
    const taskEditing = yield select(state => state.tasks.taskEditing);
    yield put(showLoading());
    const resp = yield call(
        updateTask,
        { title, description, status },
        taskEditing.id)
    console.log('resp', resp)
    const { data, status: statusCode } = resp;
    if (statusCode === STATUSES_CODE.SUCCESS) {
        yield put(updateTaskSuccess(data))
        yield put(hideModal())
    } else {
        yield put(updateTasksFaild(data))
    }
    yield delay(1000);
    yield put(hideLoading())
}
//delete
function* deleteTaskSaga({ payload }) {

    const { id } = payload;
    yield put(showLoading());
    const resp = yield call(
        deleteTask, id)
    console.log('resp', resp)
    const { data, status: statusCode } = resp;
    if (statusCode === STATUSES_CODE.SUCCESS) {
        yield put(deleteTaskSuccess(id))
        yield put(hideModal())
    } else {
        yield put(deleteTasksFaild(data))
    }
    yield delay(1000);
    yield put(hideLoading())
}

function* rootSaga() {
    yield fork(watchFetchListTaskAction);
    // yield fork(watchCreateTaskAction);
    yield takeLatest(taskTypes.FILTER_TASK, filterTaskSaga);
    yield takeEvery(taskTypes.ADD_TASK, addTaskSaga);
    yield takeEvery(taskTypes.UPDATE_TASK, updateTaskSaga);
    yield takeLatest(taskTypes.DELETE_TASK, deleteTaskSaga)
}

export default rootSaga;