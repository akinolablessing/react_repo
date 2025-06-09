import {createBrowserRouter} from "react-router";
import Dashboard from "../components/dashboard.jsx";
import RegisterUser from "../components/registerUser.jsx";

const router = createBrowserRouter([
    {
        path:"",
        element:<Dashboard/>
    },
    {
        path:"/registerUser",
        element: <RegisterUser/>
    }
])

export default router;