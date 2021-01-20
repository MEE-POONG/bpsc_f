import React, {createContext} from "react";
import {useImmerReducer} from "use-immer";
export const UsersContext = createContext({});

const initialState = {
  users: {
    username: 0,
    password: 0,
  },
};

const usersReducer = (draft, action) => {
  // eslint-disable-next-line
  switch (action.type) {
    case "NEW_USERS": {
      draft.users = {
        username: action.payload.username, // set state counter
        password: action.payload.password, // set state counter
      };
      return;
    }
  }
};

export const UsersProvider = ({children}) => {
  const [usersState, usersDispatch] = useImmerReducer(usersReducer, initialState);

  const {users} = usersState;

  const newUsers = (payload) => usersDispatch({type: "NEW_USERS", payload}); // ส่ง type SUB_COUNTER และ payload เพื่อให้ conterReducer ไปใช้งานต่อ

  return (
    <UsersContext.Provider value={{users, newUsers}}>{children}</UsersContext.Provider>
  );
};
