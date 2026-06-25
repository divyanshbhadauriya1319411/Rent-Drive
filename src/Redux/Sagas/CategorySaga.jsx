import { put, takeEvery } from "redux-saga/effects"
import { CREATE_CATEGORY, CREATE_CATEGORY_RED, DELETE_CATEGORY, DELETE_CATEGORY_RED, GET_CATEGORY, GET_CATEGORY_RED, UPDATE_CATEGORY, UPDATE_CATEGORY_RED } from "../Constant"
import { createMultipartRecord, createRecord, deleteRecord, getRecord, updateMultipartRecord, updateRecord } from "./Services/index"

function* createSaga(action) {                                          //Worker
    let response = yield createRecord("category", action)
    // let response = yield createMultipartRecord("category", action)
    yield put({ type: CREATE_CATEGORY_RED, payload: response })
}

function* getSaga(action) {                                             //Worker
    let response = yield getRecord("category")
    yield put({ type: GET_CATEGORY_RED, payload: response })
}

function* updateSaga(action) {                                          //Worker
    yield updateRecord("category", action)
    yield put({ type: UPDATE_CATEGORY_RED, payload: action.payload })
    // let response = yield updateMultipartRecord("category", action)
    // yield put({ type: UPDATE_CATEGORY_RED, payload: response })
}

function* deleteSaga(action) {                                         //Worker
    yield deleteRecord("category", action)
    yield put({ type: DELETE_CATEGORY_RED, payload: action.payload })
}

export default function* CategorySaga(){
    yield takeEvery(CREATE_CATEGORY,createSaga)                 //Watcher
    yield takeEvery(GET_CATEGORY,getSaga)                       //Watcher
    yield takeEvery(UPDATE_CATEGORY,updateSaga)                 //Watcher
    yield takeEvery(DELETE_CATEGORY,deleteSaga)                 //Watcher
}