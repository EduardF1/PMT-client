import axios from "axios";
import {GET_ERRORS, GET_BACKLOG, GET_PROJECT_TASK, DELETE_PROJECT_TASK} from "./types";

export const addProjectTask = (backlogId: string, projectTask: any, history: any) => async (dispatch: any) => {
    try {
        await axios.post(`/api/backlog/${backlogId}`, projectTask);
        history.push(`/projectBoard/${backlogId}`);
        dispatch({
            type: GET_ERRORS,
            payload: {}

        });
    } catch (err: any) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        });
    }
    ;
};

export const getBacklog = (backlogId: string) => async (dispatch: any) => {
    try {
        const res = await axios.get(`/api/backlog/${backlogId}`)
        dispatch({
            type: GET_BACKLOG,
            payload: res.data
        })
    } catch (err: any) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        });
    }
    ;
};

export const getProjectTask = (backlogId: string, projectTaskId: string, history: any) => async (dispatch: any) => {
    try {
        const res = await axios.get(`/api/backlog/${backlogId}/${projectTaskId}`);
        dispatch({
            type: GET_PROJECT_TASK,
            payload: res.data
        });
    } catch (err) {
        history.push("/dashboard");
    }
}

export const updateProjectTask = (backlogId: string, projectTaskId: string, projectTask: any, history: any) => async (dispatch: any) => {
    try {
        await axios.patch(`/api/backlog/${backlogId}/${projectTaskId}`, projectTask);
        history.push(`/projectBoard/${backlogId}`);
        dispatch({
            type: GET_ERRORS,
            payload: {}
        })
    } catch (err:any) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    }
}

export const deleteProjectTask = (backlogId:string, projectTaskId:string) => async (dispatch:any) => {
    if(window.confirm(`You are deleting project task ${projectTaskId}, this cannot be undone.`)){
        await axios.delete(`/api/backlog/${backlogId}/${projectTaskId}`);
        dispatch({
            type:DELETE_PROJECT_TASK,
            payload:projectTaskId
        });
    };
}