import { ADD_ITEM, DELETE_ITEM } from '../reducer'

export const addItem = item => {
    return {
        type: ADD_ITEM,
        payload: item
    }
}

export const deleteItem = id => {
    return {
        type: DELETE_ITEM,
        payload: id
    }
}