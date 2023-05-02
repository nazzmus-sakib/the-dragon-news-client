import React from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";

import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Category from "../pages/Category/Category";
import NewsLayout from "../layout/NewsLayout";
import News from "../pages/news/News";
import Login from "../pages/login/Login";
import LoginLayout from "../layout/LoginLayout";
import Register from "../pages/login/Register";
import Privateroute from "./Privateroute";
import Terms from "../pages/Terms";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: "/",
        element: <Navigate to="/category/0"></Navigate>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "terms",
        element: <Terms></Terms>,
      },
    ],
  },
  {
    path: "/category",
    element: <Main></Main>,
    children: [
      {
        path: ":id",
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(`http://localhost:2500/category/${params.id}`),
      },
    ],
  },
  {
    path: "news",
    element: <NewsLayout></NewsLayout>,
    children: [
      {
        path: ":id",
        element: (
          <Privateroute>
            <News></News>
          </Privateroute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:2500/news/${params.id}`),
      },
    ],
  },
]);

export default router;
