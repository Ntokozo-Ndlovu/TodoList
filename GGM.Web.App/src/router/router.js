import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import HomePage from "../pages/HomePage";
import UserProfile from "../pages/UserProfile";
import MainLayout from "../layout/MainLayout";


const rootRouter = createBrowserRouter([
    {path:'login',element: <LoginPage/>},
    {path:'signup', element:<SignUpPage/>},
    {path:'home', element:<MainLayout/>,children:[
      {path:'', element:<HomePage/>},
      {path:'userprofile', element:<UserProfile/>}
    ]}
  ])

  export default rootRouter;