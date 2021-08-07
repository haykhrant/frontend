import { combineReducers } from "redux";
import todoReducer from "./todo.reducer";
import authReducer from "./auth.reducer";
import messageReducer from "./message.reducer";

export default combineReducers({
  todo: todoReducer,
  auth: authReducer,
  message: messageReducer,
});
