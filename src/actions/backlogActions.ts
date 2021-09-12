import axios from "axios";
import {GET_ERRORS} from "./types";

export const addProjectTask = (backlogId: string, projectTask: any, history: any) => async (dispatch: any) => {
    try {
        await axios.post(`/api/backlog/${backlogId}`, projectTask);
        history.push(`/projectBoard/${backlogId}`);
        dispatch({
            type: GET_ERRORS,
            payload: {}

        });
    } catch (err:any) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        });
    }
};