import { CREATE_BRANCREATE_BRAND, D, DELETE_BRANDCREATE_BRAND, GET_BRANDCREATE_BRAND, UPDATE_BRANDCREATE_BRAND } from "../Constant"

export function createBrand(data) {
    return {
        type: CREATE_BRAND,
        payload: data
    }
}

export function getBrand() {
    return {
        type: GET_BRANDCREATE_BRAND
    }
}

export function updateBrand(data) {
    return {
        type: UPDATE_BRANDCREATE_BRAND,
        payload: data
    }
}

export function deleteBrand(data) {
    return {
        type: DELETE_BRANDCREATE_BRAND,
        payload: data
    }
}