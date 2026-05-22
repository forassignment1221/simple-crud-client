import {  StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter
} from "react-router";
import {RouterProvider} from "react-router/dom"
import UserDetails from './components/UserDetails.jsx';

const route=createBrowserRouter([
  {
    path:"/",
    Component: App
  },
  {
    path:"users/:id",
    Component:UserDetails,
    loader:({params})=>fetch(`http://localhost:3000/users/${params.id}`)
  }
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={route}></RouterProvider>
  </StrictMode>,
)
