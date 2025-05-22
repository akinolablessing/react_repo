import router from "./component/router/router.jsx";
import {RouterProvider} from "react-router";

function App() {

    return(
<>
    <RouterProvider router={router}></RouterProvider>
</>
    );
}

export default App
