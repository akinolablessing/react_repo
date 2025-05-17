import {createBrowserRouter} from "react-router";
import Card from "../Card.jsx";
import Bigsize from "../Bigsize.jsx";



const router = createBrowserRouter([
    {
        path:"",
        element:<Card/>
    },
    {
        path:"/pizza",
        element:<Card/>
    },
    {
        path:"/bigSize",
        element:<Bigsize/>
    }
]);
export default router;