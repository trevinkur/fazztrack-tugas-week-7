import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { signout } from '../auth/authSlice'


const baseQuery = fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1",
        prepareHeaders: (headers, {getState}) => {
            const token = getState().auth.token
            if(token) {
                // headers.set("authorization", `Bearer ${token}`)
                headers.set("authorization", token)
            }
            return headers
        }
})

const verifyBaseQuery = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions)
    console.log(result)
    if(result?.error?.status === 401) {
        console.log("logout")
        api.dispatch(signout())
    }
    return result
}

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: verifyBaseQuery,
    tagTypes: ["users"],
    endpoints: ()=> ({})
    
})

// export const apiSlice = createApi({
//     reducerPath: "api",
//     baseQuery: fetchBaseQuery({
//         baseUrl: "http://localhost:5000/api/v1",
//         prepareHeaders: (headers, {getState}) => {
//             const token = getState().auth.token
//             if(token) {
//                 headers.set("authorization", `Bearer ${token}`)
//             }
//             return headers
//         }
//     }),
//     endpoints: ()=> ({})
// })