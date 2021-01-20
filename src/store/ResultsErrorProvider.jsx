import React, {createContext} from "react";
import {useImmerReducer} from "use-immer";
export const ResultsErrorContext = createContext({});

const initialState = {
  resultsError: 1,
};

const resultsErrorReducer = (draft, action) => {
  // eslint-disable-next-line
  switch (action.type) {
    case "NEW_RESULTS": {
      draft.resultsError = action.payload;
      return;
    }
  }
};

export const ResultsErrorProvider = ({children}) => {
  const [resultsErrorState, resultsErrorDispatch] = useImmerReducer(
    resultsErrorReducer,
    initialState
  );

  const {resultsError} = resultsErrorState;

  const newResultsError = (payload) =>
    resultsErrorDispatch({type: "NEW_RESULTS", payload}); // ส่ง type SUB_COUNTER และ payload เพื่อให้ conterReducer ไปใช้งานต่อ

  return (
    <ResultsErrorContext.Provider value={{resultsError, newResultsError}}>
      {children}
    </ResultsErrorContext.Provider>
  );
};
