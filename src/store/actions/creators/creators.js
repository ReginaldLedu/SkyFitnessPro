import { ADD_TODO, ADD_USER } from "../types/types";

const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: { todo },
});

export const addUser = (user) => ({
  type: ADD_USER,
  payload: { user },
});

export default addTodo;
