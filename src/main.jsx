import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import LoginPage from './pages/login';
import RegistorPage from './pages/registor';
import UserPage from './pages/user';
import ProductPage from './pages/product';
import { createBrowserRouter, RouterProvider, } from "react-router-dom"; 

const router = createBrowserRouter([ 
  { path: "/", element: <App />, },
  { path: "/login", element: <LoginPage />, },
  { path: "/register", element: <RegistorPage />, },
  { path: "/users",element: <UserPage />, },
  { path: "/products",element: <ProductPage />, }
 ]); 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} /> 
  </React.StrictMode>
)
