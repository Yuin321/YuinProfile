import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Lazy load pages
const Home = React.lazy(() => import('./pages/Home.jsx'));
const ErrorPage = React.lazy(() => import('./pages/ErrorPage.jsx'));
const About = React.lazy(() => import('./pages/About.jsx'));
const Portfolio = React.lazy(() => import('./pages/Portfolio.jsx'));

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: (
      <Suspense fallback={<div>Loading Error Page...</div>}>
        <ErrorPage />
      </Suspense>
    ),
    element: <App />,
    children: [
      {
        path: '',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: 'about',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: 'portfolio',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Portfolio />
          </Suspense>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
