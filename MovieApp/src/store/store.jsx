import {configureStore} from "@reduxjs/toolkit";
// import {setupListeners} from "@reduxjs/toolkit/query";
import {userAuthApiSlice} from "../services/userAuthApi.jsx";
import {setupListeners} from "@reduxjs/toolkit/query";
import {movieApi} from "../services/movieApi.jsx";

export const store = configureStore({
    reducer:{
        [userAuthApiSlice.reducerPath]: userAuthApiSlice.reducer
    },
    middleware:(getDefaultMiddleware)=>(
        getDefaultMiddleware().concat(userAuthApiSlice.middleware)
    )
})
setupListeners(store.dispatch)
