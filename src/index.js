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
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} >
      <App />
    </RouterProvider>
  </React.StrictMode>
);
