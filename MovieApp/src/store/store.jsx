import {configureStore} from "@reduxjs/toolkit";
// import {setupListeners} from "@reduxjs/toolkit/query";
import {userAuthApiSlice} from "../services/userAuthApi.jsx";
import {setupListeners} from "@reduxjs/toolkit/query";
import {movieApi} from "../services/movieApi.jsx";

export const store = configureStore({
    reducer:{
        [userAuthApiSlice.reducerPath]: userAuthApiSlice.reducer,
        [movieApi.reducerPath]: movieApi.reducer
    },
    middleware:(getDefaultMiddleware)=>(
        getDefaultMiddleware().concat(userAuthApiSlice.middleware,
            movieApi.middleware)
    )
})
setupListeners(store.dispatch)
