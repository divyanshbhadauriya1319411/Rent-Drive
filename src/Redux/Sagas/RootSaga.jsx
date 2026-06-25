import { all } from "redux-saga/effects";
import categorySaga from "./CategorySaga";

export default function* RootSaga() {
    yield all ([
        categorySaga(), 
    ])
}