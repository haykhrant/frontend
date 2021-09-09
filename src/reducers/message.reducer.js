import { v4 as uuidv4 } from "uuid";

const initialState = {
  messages: [],
  messageType: "",
};

export default function messageReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_MESSAGE":
      return {
        ...state,
        messages: [...state.messages, { text: action.payload, id: uuidv4() }],
        messageType: action.messageType,
      };
    case "EMPTY_MESSAGES":
      return {
        ...state,
        messages: action.payload,
      };
    case "FILTER_MESSAGES":
      return {
        ...state,
        messages: state.messages.filter((mes) => mes.id !== action.payload),
      };
    default:
      return state;
  }
}
