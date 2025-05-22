import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const storeApiUrl = "https://dummyjson.com";

export const storeApi = createApi({
    reducerPath: 'storeApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${storeApiUrl}`
    }),
    endpoints:(builder) => ({
        getStoreNow:builder.query({
            query:()=>`/products`
        })
    })

})
export const {useGetStoreNowQuery} = storeApi
