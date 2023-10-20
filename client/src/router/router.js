import { createBrowserRouter } from "react-router-dom";
import LoginPage, {action as loginAction} from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import HomePage,{loader as homeLoader} from "../pages/HomePage";
import UserProfile from "../pages/UserProfile";
import MainLayout from "../layout/MainLayout";
import {loader as logoutLoader} from '../ui/Navigation';
import {action as addTodoAction}  from "../components/AddTodoList/AddTodoListForm"
import {action as deleteTodoAction} from "../components/TodoList/TodoListItem";
import {loader as userProfileLoader, action as userProfileAction} from '../pages/UserProfile';
import {action as signUpAction } from '../pages/SignUpPage';

const rootRouter = createBrowserRouter([
    {path:'login',element: <LoginPage/>,action:loginAction},
    {path:'signup', element:<SignUpPage/>, action:signUpAction},
    {path:'addtodo',action:addTodoAction},
    {path:'home', element:<MainLayout/>,children:[
      {path:'', loader:homeLoader,element:<HomePage/>},
      {path:'userprofile', element:<UserProfile/>,loader:userProfileLoader,action:userProfileAction},
      {path:'todo',action:deleteTodoAction}
    ]},
    {path:'logout',loader:logoutLoader}
  ])

  export default rootRouter;