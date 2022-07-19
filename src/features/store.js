import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import movieSlice from "./Movie/movieSlice";
import scheduleReducer from "./Schedule/scheduleSlice";
import { apiSlice } from "./api/apiSlice";

const logger = createLogger()
const store = configureStore({
    reducer: {
        schedule: scheduleReducer,
        // movie: movieSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware, logger)

})

export default store