import { Router } from '@vaadin/router';
import { countryPath, locales } from '../assets/translations';

import './views/home-view';
import './views/catalog-view';
import './views/references-view';
import './views/not-found-view';
import './views/app-view';

export const routing = function() {
  const outlet = this.shadowRoot.getElementById('root');
  const router = new Router(outlet);

  var routes = [
    { path: '/', component: 'home-view' },
    { path: '/catalog', component: 'catalog-view' },
    { path: '/references', component: 'references-view' },
    { path: '/server', component: 'server-view' },
    { path: '/application', component: 'app-view' },
    { path: '(.*)', component: 'not-found-view' }
  ];

  if (countryPath) routes.unshift({ path: window.location.pathname, redirect: '/' });

  router.setRoutes(routes);
};

export const navigator = [
  {
    path: '/',
    name: locales.nav_home
  },
  {
    path: '/catalog',
    name: locales.home_link_catalog
  },
  {
    path: '/application',
    name: locales.home_link_auth
  },
  {
    path: '/references',
    name: locales.references_title
  }
];
