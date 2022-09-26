import { Suspense, lazy } from 'react';
import { Navigate, useRoutes, useLocation } from 'react-router-dom';
// layouts
import MainLayout from '../layouts/main';
import TradingLayout from '../layouts/trading';
import LogoOnlyLayout from '../layouts/LogoOnlyLayout';
// components
import LoadingScreen from '../components/LoadingScreen';

// ----------------------------------------------------------------------

const Loadable = (Component) => (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();
  const isDashboard = pathname.includes('/dashboard');

  return (
    <Suspense
      fallback={
        <LoadingScreen
          sx={{
            ...(!isDashboard && {
              top: 0,
              left: 0,
              width: 1,
              zIndex: 9999,
              position: 'fixed'
            })
          }}
        />
      }
    >
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    // Main Routes
    {
      path: '*',
      element: <LogoOnlyLayout />,
      children: [
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" replace /> }
      ]
    },
    {
      path: '/',
      element: <MainLayout />,
      children: [{ path: '/', element: <LandingPage /> }]
    },
    {
      path: '/trading-view',
      element: <TradingLayout />,
      children: [{ path: '/', element: <TradingPage /> }]
    },
    {
      path: '/trading-old-view',
      element: <TradingOldPage />
    },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}

// IMPORT COMPONENTS

const NotFound = Loadable(lazy(() => import('../pages/Page404')));
// Main
const LandingPage = Loadable(lazy(() => import('../pages/LandingPage')));
// const LandingPage = Loadable(lazy(() => import('../pages/LandingOldPage')));
const TradingPage = Loadable(lazy(() => import('../pages/TradingPage')));
const TradingOldPage = Loadable(lazy(() => import('../pages/TradingOldPage')));
