import { createSlice } from "@reduxjs/toolkit"
import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { apiSlice } from "../api/apiSlice"

// export const fetchMovie = createAsyncThunk("movie/fetchMovie", async (id) => {
//     console.log(id)
//     return axios.get(`http://localhost:5000/api/v1/movies/${id}`)
//     .then(res => res.data).catch(error => error.message)
// })

// const movieSlice = createSlice({
//     name: "movie",
//     initialState: {
//         loading: false,
//         movie: {},
//         error: "",
//     },
//     extraReducers: (builder) => { 
//         builder.addCase(fetchMovie.pending, (state) => {
//             state.loading = true
//         })
//         builder.addCase(fetchMovie.fulfilled, (state, action) => {
//             state.loading = false
//             state.movie = action.payload
//             state.error = ""
//         })
//         builder.addCase(fetchMovie.rejected, (state, action) => {
//             state.loading = false
//             state.movie = action.payload
//             state.error = action.error.message
//         })
        
//     }
// }) 

// export default movieSlice.reducer

export const movieApiSlice =  apiSlice.injectEndpoints({
    endpoints: builder => ({
        getMovies: builder.query({
            query: () => "/movies"
        }),
        getMovieId: builder.query({
            query: (id) => `/movies/${id}`
        })
    })
})

export const { useGetMovieQuery, useGetMovieIdQuery } = apiSlice