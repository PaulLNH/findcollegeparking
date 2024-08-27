import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App';
import TenantRegistration from "./components/TenantRegistration";
import HostRegistration from "./components/HostRegistration";
import Home from './components/Home';
import Donate from './components/Donate';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/tenant-register",
    element: <TenantRegistration />
  },
  {
    path: "/host-register",
    element: <HostRegistration />
  },
  {
    path: "/test",
    element: <Home />
  },
  {
    path: "/donate",
    element: <Donate />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} >
      <App />
    </RouterProvider>
  </React.StrictMode>
);
