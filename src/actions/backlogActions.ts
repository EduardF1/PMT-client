import axios from "axios";
import {GET_ERRORS, GET_BACKLOG} from "./types";

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

export const getBacklog = (backlogId:string) => async (dispatch:any) => {
    try {
        const res = await axios.get(`/api/backlog/${backlogId}`)
        dispatch({
            type:GET_BACKLOG,
            payload:res.data
        })
    }catch (err){

    }
}