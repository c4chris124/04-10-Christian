import thunk from "redux-thunk"
import { configureStore } from "@reduxjs/toolkit"
import branchReducer from "./reducers/branchReducer"

export const store = configureStore({
  reducer: { branchReducer },
  middleware: [thunk]
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
