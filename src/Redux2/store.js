import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import movieSlice from "./Movie/movieSlice";
// import scheduleReducer from "./Schedule/scheduleSlice";
import { apiSlice } from "./api/apiSlice";
import scheduleQueryReducer from "./Schedule/scheduleQuerySlice";
import authReducer from "./auth/authSlice";
import persistedtedReducer from "./reducers";


const logger = createLogger()
// const store = configureStore({
//     reducer: {
//         [apiSlice.reducerPath]: apiSlice.reducer,
//         scheduleQuery: scheduleQueryReducer,
//         auth: authReducer
//         // schedule: scheduleReducer,
//         // movie: movieSlice
//     },
//     middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware, logger)

// })

const store = configureStore({
    reducer: persistedtedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware, logger)

})


export default store