import api from "../API";
import {
  getTodoSuccsess,
  getTodoFailure,
  postTodoSuccsess,
  postTodoFailure,
  patchTodoSuccsess,
  patchTodoFailure,
  deleteTodoSuccsess,
  deleteTodoFailure,
} from "../actions";

export const getTodoThunk = () => async (dispatch) => {
  try {
    const response = await api.getOrPostTodos.get();
    dispatch(getTodoSuccsess(response.data));
  } catch (err) {
    console.error("FROM GET_THUNK", err);
    if (err.response) {
      dispatch(getTodoFailure(err.response));
    }
  }
};

export const postTodoThunk = (data) => async (dispatch) => {
  try {
    const response = await api.getOrPostTodos.post(data);
    dispatch(postTodoSuccsess(response.data));
  } catch (err) {
    if (err.response) {
      dispatch(postTodoFailure(err.response.data.message));
    }
  }
};

export const patchTodoThunk = (data, id) => async (dispatch) => {
  try {
    const response = await api.patchOrDeleteTodos(id).patch(data);
    if(JSON.stringify(response.data) !== JSON.stringify(data)){
       dispatch(patchTodoSuccsess({
         ...response.data,
         date: new Date()
       }))
    }
    else{
      dispatch(patchTodoFailure("Todo is missing attributes"));
    }
  } catch (err) {
    if (err) {
      dispatch(patchTodoFailure(err.response.data.message));
    }
  }

};

export const deleteTodoThunk = (id) => async (dispatch) => {
  try {
    const response = await api.patchOrDeleteTodos(id).delete();
    if(response.data.deletedCount){
         dispatch(deleteTodoSuccsess(response.data.operationTime));
    }
    else if(response.data.message){
        dispatch(deleteTodoFailure(response.data.message));
    }
    else if(!response.data.deletedCount){
        dispatch(deleteTodoFailure("Todo not found"));
    }

  } catch (err) {
    if (err) {
       dispatch(deleteTodoFailure(err));
    }
  }
};
