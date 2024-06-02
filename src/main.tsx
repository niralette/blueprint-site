import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './typography.css';
import './index.css';
import { Root } from './routes/root.tsx';
import { Addons } from './routes/addons/index.tsx';
import { loader as addonsLoader } from './routes/addons/loader.ts';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/addons',
        element: <Addons />,
        loader: addonsLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
