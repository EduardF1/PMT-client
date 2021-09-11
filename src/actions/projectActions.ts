import axios from "axios";
import {GET_ERRORS} from "./types";

export const createProject = (project: any, history: any) => async (dispatch: any) => {
    try {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const res = await axios.post("http://localhost:8080/api/project", project);
        history.push("/dashboard"); // redirect to dashboard
    } catch (err:any) {
        dispatch({
            type:GET_ERRORS,
            payload:err.response.data

        })
    }
}