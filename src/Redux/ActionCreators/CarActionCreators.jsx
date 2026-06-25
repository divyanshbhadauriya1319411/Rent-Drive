import { CREATE_CARGET_CAR, DELETGET_CAR, E_CARGET_CAR, GET_CAR, UPDATE_CARGET_CAR } from "../Constant"

export function createCar(data) {
    return {
        type: CREATE_CARGET_CAR,
        payload: data
    }
}

export function getCar() {
    return {
        type: GET_CAR
    }
}

export function updateCar(data) {
    return {
        type: UPDATE_CARGET_CAR,
        payload: data
    }
}

export function deleteCar(data) {
    return {
        type: DELETE_CARGET_CAR,
        payload: data
    }
}