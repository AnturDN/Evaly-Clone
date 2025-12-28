
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Store from "./Pages/Store/Store";
import Categories from "./Pages/Categories/Categories";


const route = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/store',
    element:<Store/>
  },
  {
    path:'/categories',
    element:<Categories/>
  },
])

function App() {
  return <RouterProvider router={route}/>;
}

export default App;
