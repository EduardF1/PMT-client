import axios from "axios";
import {DELETE_PROJECT, GET_ERRORS, GET_PROJECT, GET_PROJECTS} from "./types";

export const createProject = (project: any, history: any) => async (dispatch: any) => {
    try {
        const res = await axios.post("http://localhost:8080/api/project", project);
        history.push("/dashboard"); // redirect to dashboard
    } catch (err: any) {
        dispatch({
            type: GET_ERRORS,
            payload: {}

        })
    }
}

export const getProjects = () => async (dispatch: any) => {
    const res = await axios.get("http://localhost:8080/api/project/all");
    dispatch({
        type: GET_PROJECTS,
        payload: res.data
    });
}

export const getProject = (id: string, history: any) => async (dispatch: any) => {
    try {
        const res = await axios.get(`http://localhost:8080/api/project/${id}`);
        dispatch({
            type: GET_PROJECT,
            payload: res.data
        })
    } catch (err:any) {
        history.push("/dashboard");
    }
}

export const deleteProject = (id:string) => async (dispatch:any) => {
    console.log(id);
    await axios.delete(`http://localhost:8080/api/project/${id}`);
    dispatch({
        type:DELETE_PROJECT,
        payload:id
    })
}