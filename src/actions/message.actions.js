export const addMessage = (data) => ({
  type: "ADD_MESSAGE",
  payload: data,
});

export const emptyMessages = (data) => ({
  type: "EMPTY_MESSAGES",
  payload: data,
});
