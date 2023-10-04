import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage";

const rootRouter = createBrowserRouter([
    {path:'login',element: <LoginPage/>}
  ])
export default rootRouter;