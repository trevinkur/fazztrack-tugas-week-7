import { apiSlice } from "../api/apiSlice";

export const usersSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getUserId: builder.query({
            query: (id) => `/users/${id}`,
            providesTags: ["users"],
            keepUnusedDataFor: 5,
        }),
        updateUser: builder.mutation({
            query: (user) => ({
                url: `/users/${user.id}`,
                method: "PATCH",
                body: user
            })
        }),
        addUser: builder.mutation({
            query: (user) => ({
                url: `/users`,
                method: "PATCH",
                body: user
            })
        })
    })
})

export const {useGetUserIdQuery, useUpdateUserMutation, useAddUserMutation} = usersSlice