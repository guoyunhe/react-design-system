import { lazy } from 'react';
import { RouteObject, createBrowserRouter } from 'react-router-dom';

// layouts
const LandingLayout = lazy(() => import('./layouts/landing'));

// landing pages
const DesktopPage = lazy(() => import('./pages/desktop'));
const MobilePage = lazy(() => import('./pages/mobile'));

// error pages
const NotFound = lazy(() => import('./pages/not-found'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <LandingLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <DesktopPage />,
      },
      {
        path: 'mobile',
        element: <MobilePage />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
