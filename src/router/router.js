import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import HomePage from "../pages/HomePage";


const rootRouter = createBrowserRouter([
    {path:'login',element: <LoginPage/>},
    {path:'signup', element:<SignUpPage/>},
    {path:'home', element:<HomePage/>}
  ])

  export default rootRouter;