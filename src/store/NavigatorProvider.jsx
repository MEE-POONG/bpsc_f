import React, {createContext} from "react";
import {useImmerReducer} from "use-immer";
export const NavigatorContext = createContext({});

const initialState = {
  navigator: 1,
};

const navigatorReducer = (draft, action) => {
  // eslint-disable-next-line
  switch (action.type) {
    case "NEW_NAVIGATOR": {
      draft.navigator = action.payload;
      return;
    }
  }
};

export const NavigatorProvider = ({children}) => {
  const [navigatorState, navigatorDispatch] = useImmerReducer(navigatorReducer, initialState);

  const {navigator} = navigatorState;

  const newNavigator = (payload) => navigatorDispatch({type: "NEW_NAVIGATOR", payload}); // ส่ง type SUB_COUNTER และ payload เพื่อให้ conterReducer ไปใช้งานต่อ

  return (
    <NavigatorContext.Provider value={{navigator, newNavigator}}>
      {children}
    </NavigatorContext.Provider>
  );
};
