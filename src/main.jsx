import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import LoginPage from './pages/login';
import RegistorPage from './pages/registor';
import UserPage from './pages/user';
import ProductPage from './pages/product';
import { createBrowserRouter, RouterProvider, } from "react-router-dom"; 
import './styles/global.css'

const router = createBrowserRouter([ 
  { path: "/", element: <App />, 
    children: [  
      { path: "/users",element: <UserPage />, },
      { path: "/products", element: <ProductPage />, }]
  },
  { path: "/login", element: <LoginPage />, },
  { path: "/register", element: <RegistorPage />, }
 ]); 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} /> 
  </React.StrictMode>
)
