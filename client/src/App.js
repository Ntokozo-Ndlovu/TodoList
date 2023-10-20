import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState } from "react";
import "./App.css";
import LoginPage from './pages/LoginPage';
import { Outlet, RouterProvider } from 'react-router';
import rootRouter from './router/router';
//We are going to create a router

function App() {
 return (<RouterProvider router={rootRouter}>
  <Outlet></Outlet>
 </RouterProvider>);
}

export default App;
