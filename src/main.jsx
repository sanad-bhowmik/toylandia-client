import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home/Home.jsx';
import Blog from './components/Blog/Blog.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import ToyDetails from './components/ToyDetails/ToyDetails.jsx';
import Login from './components/pages/Login/Login.jsx';
import Registration from './components/pages/Registration/Registration.jsx';
import AuthProviders from './components/providers/AuthProviders.jsx';
import AllToys from './components/AllToys/AllToys.jsx';
import Mytoys from './components/Mytoys/Mytoys.jsx';
import AddToys from './components/AddToys/AddToys.jsx';
import UpdateToy from './components/UpdateToy/UpdateToy.jsx';
import PrivateRoute from './components/Routes/PrivateRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/registration',
    element: <Registration />
  },
  {
    path: '/blog',
    element: <Blog />
  },
  {
    path: '/toy/:id',
    element: <PrivateRoute><ToyDetails /></PrivateRoute>
  },
  {
    path: '/alltoys',
    element: <AllToys />
  },
  {
    path: '/mytoys',
    element: <Mytoys />
  },
  {
    path: '/addtoys',
    element: <AddToys />
  },
  {
    path: '/updateToy/:id',
    element: <UpdateToy />,
    loader: ({params}) => fetch(`http://localhost:5000/toys/${params.id}`)
  },
  {
    path: '*',
    element: <ErrorPage />
  },

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders><RouterProvider router={router} /></AuthProviders>
  </React.StrictMode>,
)
