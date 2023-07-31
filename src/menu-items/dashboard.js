// assets
import { DashboardOutlined,UserOutlined,  ContactsOutlined,UserAddOutlined 
} from '@ant-design/icons';

// icons
const icons = {
  DashboardOutlined,
  UserOutlined,
  ContactsOutlined ,
  UserAddOutlined
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
      url: '/',
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
      title: 'Contact Us',
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
      icon: icons.UserAddOutlined,
      breadcrumbs: false
      
    }
  ]
  
  
}




export default dashboard;



