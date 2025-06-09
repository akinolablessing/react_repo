
import {test, expect} from "vitest";
import {Provider} from "react-redux";
import {store} from "../component/userStore/store.jsx";
import {configureStore}  from "@reduxjs/toolkit";
import {render} from "@testing-library/react";
import {productStoreApiSlice} from "../"

test("add two numbers", ()=>{
    expect(1+1).toBe(2)
})

const mockStore = configureStore({
    reducer:(
       [productStoreApiSlice.reducerPath]: productStoreApiSlice.reducer,
    ),
    middleware:(getDefaultMiddleware)=>(
        getDefaultMiddleware().concat(productStoreApiSlice.middleware)
)
});

const  renderWithProvider =(ui)=>(
    render(<Provider store={mockStore}></Provider>)
)
describe("Product Card",()=>{
    test("isLoading is in the document",()=>{
        renderWithProvider(<store/>)
    })
})
