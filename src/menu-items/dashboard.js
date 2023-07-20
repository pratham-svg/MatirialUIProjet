// assets
import { DashboardOutlined,UserOutlined,  ContactsOutlined 
} from '@ant-design/icons';

// icons
const icons = {
  DashboardOutlined,
  UserOutlined,
  ContactsOutlined 
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
  id: 'group-dashboard',
  title: 'Navigation',
  type: 'group',
  children: [
    {
      id: 'dashboard',
      title: 'Dashboard',
      type: 'item',
      url: '/dashboard/default',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    },
    {
      id: 'users',
      title: 'Users',
      type: 'item',
      url: '/users',
      icon: icons.UserOutlined,
      breadcrumbs: false
    },
    {
      id: 'ContactUs',
      title: 'ContactUs',
      type: 'item',
      url: '/ContactUs',
      icon: icons.ContactsOutlined,
      breadcrumbs: false
      
    },
    {
      id: 'Subscription',
      title: 'User Subscription',
      type: 'item',
      url: '/Subscription',
      icon: icons.ContactsOutlined,
      breadcrumbs: false
      
    }
  ]
};

export default dashboard;
