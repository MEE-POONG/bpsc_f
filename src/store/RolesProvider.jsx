import React, {createContext} from "react";
import {useImmerReducer} from "use-immer";
export const RolesContext = createContext({});

const initialState = {
  roles: {
    UID: "",
    RoleID: "",
    RoleName: "",
    StatusFlag: "",
  },
};

const rolesReducer = (draft, action) => {
  // eslint-disable-next-line
  switch (action.type) {
    case "NEW_ROLES": {
      draft.roles = {
        UID: action.payload.UID, // set state counter
        RoleID: action.payload.RoleID, // set state counter
        RoleName: action.payload.RoleName, // set state counter
        StatusFlag: action.payload.StatusFlag, // set state counter
      };
      return;
    }
  }
};

export const RolesProvider = ({children}) => {
  const [rolesState, rolesDispatch] = useImmerReducer(rolesReducer, initialState);

  const {roles} = rolesState;

  const newRoles = (payload) => rolesDispatch({type: "NEW_ROLES", payload}); // ส่ง type SUB_COUNTER และ payload เพื่อให้ conterReducer ไปใช้งานต่อ

  return (
    <RolesContext.Provider value={{roles, newRoles}}>{children}</RolesContext.Provider>
  );
};
