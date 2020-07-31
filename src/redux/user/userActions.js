export const UPDATE_USER = "UPDATE_USER";

export const updateFakeNewUserInput = (e) => {
  let key = e.target.id;
  let value = e.target.value;

  return {
    type: UPDATE_USER,
    payload: { key, value },
  };
};
