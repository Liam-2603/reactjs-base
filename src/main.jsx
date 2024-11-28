import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import LoginPage from './pages/login';
import RegistorPage from './pages/registor';
import UserPage from './pages/user';
import ProductPage from './pages/product';
import { createBrowserRouter, RouterProvider, } from "react-router-dom"; 
import './styles/global.css'
import ErrorPage from './pages/error';

const router = createBrowserRouter([ 
  { path: "/", 
    element: <App />, 
    errorElement: <ErrorPage />,
    children: [  
      { index: true, element: <div> Nguyen Tuan Thanh</div>}, // Chỉ hiện trong trang App
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
