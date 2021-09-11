import {GET_PROJECTS} from "../actions/types";

const initialState = {
    projects: [],
    project: {}
};

export default function projectReducer(state = initialState, action:any){
    switch (action.type) {
        case GET_PROJECTS:
            return {
                ...state,
                projects:action.payload
            }
        default:
            return state;
    }
}