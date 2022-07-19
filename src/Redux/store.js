// import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk"
import logger from "redux-logger";


// export const store = createStore({
//     reducer: rootReducer()
// })

export const store = createStore( rootReducer, applyMiddleware(thunk, logger) )