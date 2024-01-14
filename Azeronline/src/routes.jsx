import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"



export const routes = [
    {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "Login",
        element: <Login></Login>
      },
      {
        path: "Regist",
        element: <Register></Register>
      }
   
    ]