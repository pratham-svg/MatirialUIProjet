import { useRoutes } from 'react-router-dom';

// project import
import LoginRoutes from './LoginRoutes';
import MainRoutes from './MainRoutes';
import NotFoundRoute from './NotFoundRoute';
// ==============================|| ROUTING RENDER ||============================== //



export default function ThemeRoutes() {
  return useRoutes([MainRoutes, LoginRoutes , NotFoundRoute]);
}
