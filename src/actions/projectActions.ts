import axios from "axios";
import {GET_ERRORS, GET_PROJECT, GET_PROJECTS} from "./types";

export const createProject = (project: any, history: any) => async (dispatch: any) => {
    try {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
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