import {SET_CURRENT_USER} from '../actions/types';

const initialState = {
    user: {},
    validToken: false
}

const isActionPayloadSet = (payload: any) => {
    return payload ? true : false;
}

export default function (state = initialState, action: any) {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                validToken: isActionPayloadSet(action.payload),
                user: action.payload
            };
        default:
            return state;
    }
}