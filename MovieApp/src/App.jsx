


import router from "./router/routes.jsx";
import {RouterProvider} from "react-router"

function App() {

  return (
    <>
        <RouterProvider router={router}></RouterProvider>
      {/*<SignUp/>*/}
      {/*<Login/>*/}
  </>
  )
}

export default App
