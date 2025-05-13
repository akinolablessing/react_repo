import {createBrowserRouter} from "react-router";
import SignUp from "../component/auth/singup/SignUp.jsx";
import Login from "../component/auth/login/Login.jsx";
import LayOut from "../component/layOut/LayOut.jsx";
import NowPlaying from "../component/movies/NowPlaying.jsx";

const router = createBrowserRouter([
    {
    path: "",
    element: <SignUp/>
},
    {
        path: "/singUp",
        element: <SignUp/>
    },
    {
        path:"/login",
        element:<Login/>
    },
    {
        path:"/home",
        element: <LayOut/>,
        children:[
            {
            path:"/home",
                element:<NowPlaying/>
            }
        ]
    }

])
export default router;