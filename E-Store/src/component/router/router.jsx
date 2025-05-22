import {createBrowserRouter} from "react-router-dom";
import OrderNow from "../stores/orderNow.jsx";
import Description from "../reuseable/description.jsx"

const router =  createBrowserRouter([

    {
        path: "/order",
        element: <OrderNow/>
    },
    {
        path:"/description/:id",
        element:<Description data={OrderNow.data}/>
    }
])
export default router
