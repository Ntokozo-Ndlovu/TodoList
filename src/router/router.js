import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
const rootRouter = createBrowserRouter([
    {path:'login',element: <LoginPage/>},
    {path:'signup', element:<SignUpPage/>}
  ])
export default rootRouter;