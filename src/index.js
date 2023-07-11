import React from 'react';
import ReactDOM from 'react-dom/client'
import {createRoot} from 'react-dom/client';
import Payment from './components/PaymentFolder/payment';
import Selection from './components/SelectionFolder/selection';
import Success from './success';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";



import App from'./app';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
 

  {
    path: "/payment",
    element: <Payment/>,
  },
  {
    path:"/selection",
    element:<Selection/>
  },
  {
    path:"/success",
    element:<Success/>
  },
 
 
 

]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);




