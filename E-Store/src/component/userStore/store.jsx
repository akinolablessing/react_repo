import {configureStore} from "@reduxjs/toolkit";
import {storeApi} from "../services/storeApi.jsx";
import {setupListeners} from "@reduxjs/toolkit/query";

export const store = configureStore({

    reducer:{
    [storeApi.reducerPath]: storeApi.reducer
    },
    middleware:(getDefaultMiddleware)=>(
        getDefaultMiddleware().concat(storeApi.middleware)
    )
})
setupListeners(store.dispatch)
// export default store