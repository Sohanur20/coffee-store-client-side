import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home/Home';
import AddCoffee from './component/addCoffee/AddCoffee';
import UpdateCoffee from './component/UpdateCoffee/UpdateCoffee';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path : '/addCoffee',
    element : <AddCoffee></AddCoffee>
  },
  {
    path : '/updateCoffee',
    element :<UpdateCoffee></UpdateCoffee>
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
