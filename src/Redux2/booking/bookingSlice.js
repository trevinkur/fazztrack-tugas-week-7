import { apiSlice } from "../api/apiSlice";

export const bookingSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getBookingById: builder.query({
            query: (id) => `/booking/${id}`
        }) 
    })
})

export const {useGetBookingByIdQuery} = bookingSlice