import axios from "axios";
import { GET_TASKS, ADD_TASK, DELETE_TASK, TASKS_LOADING } from "./types";

export const getTasks = () => (
  dispatch: (arg0: { type: string; payload?: any }) => void
) => {
  dispatch(setTasksLoading());
  axios.get("/todo/tasks").then((res) => {
    dispatch({
      type: GET_TASKS,
      payload: res.data.tasks,
    });
  });
};

export const deleteTask = (id: any) => (
  dispatch: (arg0: { type: string; payload: any }) => void
) => {
  axios.delete(`/todo/task/${id}`).then((res) => {
    dispatch({
      type: DELETE_TASK,
      payload: id,
    });
  });
};

export const addTask = (task: any) => (
  dispatch: (arg0: { type: string; payload: any }) => void
) => {
  axios.post("/todo/task", task).then((res) => {
    dispatch({
      type: ADD_TASK,
      payload: res.data.task,
    });
  });
};

export const setTasksLoading = () => {
  return {
    type: TASKS_LOADING,
  };
};
