import axios from "axios";

export const addProjectTask = (backlogId:string, projectTask:any, history:any) => async (dispatch:any) => {
    await axios.post(`/api/backlog/${backlogId}`, projectTask);
    history.push(`/projectBoard/${backlogId}`);
};