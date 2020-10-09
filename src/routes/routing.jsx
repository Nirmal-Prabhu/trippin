import Starter from '../views/starter/starter.jsx';
// ui components
import Alerts from '../views/ui-components/alert.jsx';
import Badges from '../views/ui-components/badge.jsx';
import Buttons from '../views/ui-components/button.jsx';
import Cards from '../views/ui-components/cards.jsx';

var ThemeRoutes = [
  { 
    path: '/dashboard', 
    name: 'Dashboard', 
    icon: 'mdi mdi-apps', 
    component: Starter 
  },
  {
    path: '/alert',
    name: 'Places',
    icon: 'mdi mdi-comment-processing-outline',
    component: Alerts
  },
  {
    path: '/badge',
    name: 'People',
    icon: 'mdi mdi-arrange-send-backward',
    component: Badges
  },
  {
    path: '/button',
    name: 'Popular',
    icon: 'mdi mdi-toggle-switch',
    component: Buttons
  },
  {
    path: '/card',
    name: 'Associates',
    icon: 'mdi mdi-credit-card-multiple',
    component: Cards
  },
  { path: '/', pathTo: '/dashboard', name: 'Dashboard', redirect: true }
];
export default ThemeRoutes;
