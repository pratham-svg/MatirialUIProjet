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
const CreateSubscription = Loadable(lazy(() => import('pages/Subscription/CreateSubscription')));
const SubscriptionList = Loadable(lazy(() => import('pages/Subscription/SubscriptionList')));
const UpdateSubscription = Loadable(lazy(() => import('pages/Subscription/UpdateSubscription')));






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
    },
    {
      path: 'CreateSubscription',
      element: <CreateSubscription />
    },
    {
      path: 'SubscriptionList',
      element: <SubscriptionList />
    },
    {
      path: 'UpdateSubscription/:id',
      element: <UpdateSubscription />
    },
    

  ]
};

export default MainRoutes;
