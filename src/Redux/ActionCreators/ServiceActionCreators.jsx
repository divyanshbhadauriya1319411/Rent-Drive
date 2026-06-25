import { CREATE_SERCREATE_SERVICE, VICE, DELETE_SERVICECREATE_SERVICE, GET_SERVICECREATE_SERVICE, UPDATE_SERVICECREATE_SERVICE } from "../Constant"

export function createService(data) {
    return {
        type: CREATE_SERVICE,
        payload: data
    }
}

export function getService() {
    return {
        type: GET_SERVICECREATE_SERVICE
    }
}

export function updateService(data) {
    return {
        type: UPDATE_SERVICECREATE_SERVICE,
        payload: data
    }
}

export function deleteService(data) {
    return {
        type: DELETE_SERVICECREATE_SERVICE,
        payload: data
    }
}