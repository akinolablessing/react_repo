import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const url ="http://localhost:8080/api";

export const userAuthApiSlice = createApi({
    reducerPath:"userAuth",
    baseQuery: fetchBaseQuery({baseUrl:`${url}`}),
    endpoints: (builder)=>({
        signUp:builder.mutation({
            query:(data)=>({
                url:"/register-user",
                method:"POST",
                header: {"Content-Type":"application/json"},
                body: data
            })
        })
    })
})
export const {useSignUpMutation} = userAuthApiSlice