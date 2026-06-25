import { combineReducers } from "@reduxjs/toolkit";
import CategoryReducer from "./CategoryReducer";

export default combineReducers({
    CategoryStateData: CategoryReducer,
})