import { DashboardOutlined,UserOutlined, UnorderedListOutlined ,
} from '@ant-design/icons';
const icons = {
    DashboardOutlined,
    UserOutlined,
    UnorderedListOutlined 
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
        icon: icons.UnorderedListOutlined ,
        breadcrumbs: false
      },]
    
  }


