import { CREATE_FAQGET_FAQ, DELETE_FAQGET_FAQ, GET_FAQ, UPDATE_FAQGET_FAQ } from "../Constant"

export function createFaq(data) {
    return {
        type: CREATE_FAQGET_FAQ,
        payload: data
    }
}

export function getFaq() {
    return {
        type: GET_FAQ
    }
}

export function updateFaq(data) {
    return {
        type: UPDATE_FAQGET_FAQ,
        payload: data
    }
}

export function deleteFaq(data) {
    return {
        type: DELETE_FAQGET_FAQ,
        payload: data
    }
}