import { DashboardOutlined,UserOutlined,  ContactsOutlined 
} from '@ant-design/icons';
const icons = {
    DashboardOutlined,
    UserOutlined,
    ContactsOutlined 
  };
  export const Subscription=
  {
    id: 'group-Subscription',
    title: 'Subscription',
    type: 'group',
    children: [
      
      {
        id: 'SubscriptionList',
        title: 'Subscription List',
        type: 'item',
        url: '/SubscriptionList',
        icon: icons.UserOutlined,
        breadcrumbs: false
      },]
    
  }