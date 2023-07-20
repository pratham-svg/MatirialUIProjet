import { lazy } from 'react';
// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));

// render - sample page
const Pagiantion = Loadable(lazy(() => import('pages/PaginaionTable/Pagiantion')));
const ContactUs = Loadable(lazy(() => import('pages/ContactUs/ContactUs')));
const Subscription = Loadable(lazy(() => import('pages/SubscriptionTable/Subscription')));

// render - utilities

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'users',
      element: <Pagiantion />
    },
    {
      path: 'ContactUs',
      element: <ContactUs />
    },
    {
      path: 'Subscription',
      element: <Subscription />
    }
  ]
};

export default MainRoutes;
