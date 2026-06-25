import { CREATE_FEATUREGET_FEATURE, DELGET_FEATURE, ETE_FEATUREGET_FEATURE, GET_FEATURE, UPDATE_FEATUREGET_FEATURE } from "../Constant"

export function createFeature(data) {
    return {
        type: CREATE_FEATUREGET_FEATURE,
        payload: data
    }
}

export function getFeature() {
    return {
        type: GET_FEATURE
    }
}

export function updateFeature(data) {
    return {
        type: UPDATE_FEATUREGET_FEATURE,
        payload: data
    }
}

export function deleteFeature(data) {
    return {
        type: DELETE_FEATUREGET_FEATURE,
        payload: data
    }
}