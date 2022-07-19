import { apiSlice } from "../api/apiSlice";


export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        signin: builder.mutation({
            query: (credentials) => ({
                url: "/authentication/login",
                method: "POST",
                body: {...credentials}
            })
        }),
        register: builder.mutation({
            query:(user) => ({
                url: "/authentication/register",
                method: "POST",
                body: user
            })
        })
    })
})

export const {useSigninMutation, useRegisterMutation} = authApiSlice
