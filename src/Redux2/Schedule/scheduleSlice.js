// import { createSlice } from "@reduxjs/toolkit"
// import { createAsyncThunk } from "@reduxjs/toolkit"
// import axios from "axios"
import { apiSlice } from "../api/apiSlice"

// export const fetchSchedule = createAsyncThunk("schedule/fetchSchedule", async ({id, place, schedule, cinema="s" ,  title="", sortby, order, limit=6, page=1 }) => {
//     return axios.get(`http://localhost:5000/api/v1/schedule${id ? `/${id}?schedule=${schedule}&place=${place}&cinema=${cinema}` : `?title=${title}&sortby=${sortby}&order=${order}`}&limit=${limit}&page=${page}`)
//     .then(res => res.data).catch(error => error.message)
// })

// const scheduleSlice = createSlice({
//     name: "schedule",
//     initialState: {
//         loading: false,
//         schedule: {},
//         error: "",
//     },
//     extraReducers: (builder) => { 
//         builder.addCase(fetchSchedule.pending, (state) => {
//             state.loading = true
//         })
//         builder.addCase(fetchSchedule.fulfilled, (state, action) => {
//             state.loading = false
//             state.schedule = action.payload
//             state.error = ""
//         })
//         builder.addCase(fetchSchedule.rejected, (state, action) => {
//             state.loading = false
//             state.schedule = action.payload
//             state.error = action.error.message
//         })
        
//     }
// }) 

export const scheduleSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getSchedule: builder.query({
            query: ({ title="", sortby, order, limit=6, page=1 }) => `/schedule?title=${title}&sortby=${sortby}&order=${order}&limit=${limit}&page=${page}`
        }),
        getScheduleByMovieId: builder.query({
            query: ({id, schedule,place,cinema="",limit=6,page=1}) => `/schedule/${id}?schedule=${schedule}&place=${place}&cinema=${cinema}&limit=${limit}&page=${page}`
        })
    })
})

export const { useGetScheduleQuery, useGetScheduleByMovieIdQuery} = scheduleSlice

