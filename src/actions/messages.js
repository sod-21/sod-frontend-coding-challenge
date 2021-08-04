import { ADD_MESSAGE, CLEAR_MESSAGES, DELETE_MESSAGE } from "../constants/index";

export function add_message_action(message) {
    return {
        type: ADD_MESSAGE,
        payload: message
    }
}

export function clear_messages_action() {
    return {
        type: CLEAR_MESSAGES
    }
}

export function delete_message_action(index) {
    return {
        type: DELETE_MESSAGE,
        payload: index
    }
}