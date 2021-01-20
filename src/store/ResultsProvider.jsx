import React, { createContext } from "react"
import { useImmerReducer } from "use-immer"
export const ResultsContext = createContext({})

const initialState = {
  results: 1
}

const resultsReducer = (draft, action) => {
  // eslint-disable-next-line
  switch (action.type) {

    case "NEW_RESULTS": {
      draft.results = action.payload
      return
    }

  }
}

export const ResultsProvider = ({ children }) => {
  const [resultsState, resultsDispatch] = useImmerReducer(
    resultsReducer,
    initialState
  )

  const { results } = resultsState

  const newResults = payload => resultsDispatch({ type: "NEW_RESULTS", payload }) // ส่ง type SUB_COUNTER และ payload เพื่อให้ conterReducer ไปใช้งานต่อ

  return (
    <ResultsContext.Provider value={{ results, newResults }}>
      {children}
    </ResultsContext.Provider>
  )
}