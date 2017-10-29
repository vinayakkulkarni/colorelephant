import Vue from 'vue';
import Router from 'vue-router';
import NotFoundPage from '@/components/NotFoundPage';

import Home from '@/components/Home';

import Company from '@/components/Company';
import About from '@/components/company/About';
import Team from '@/components/company/Team';
import Careers from '@/components/company/Careers';

import Services from '@/components/Services';

import Contact from '@/components/Contact';
import WhyUs from '@/components/contact/WhyUs';
import OurPromise from '@/components/contact/OurPromise';
import ContactUs from '@/components/contact/ContactUs';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/company',
    name: 'Company',
    component: Company,
    redirect: '/company/about',
    children: [
      {
        path: 'about',
        name: 'Company.About',
        component: About,
      },
      {
        path: 'team',
        name: 'Company.Team',
        component: Team,
      },
      {
        path: 'careers',
        name: 'Company.Careers',
        component: Careers,
      },
    ],
  },
  {
    path: '/services',
    name: 'Services',
    component: Services,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    redirect: '/contact/contact-us',
    children: [
      {
        path: 'why-us',
        name: 'Contact.WhyUs',
        component: WhyUs,
      },
      {
        path: 'colorelephant-promise',
        name: 'Contact.OurPromise',
        component: OurPromise,
      },
      {
        path: 'contact-us',
        name: 'Contact.ContactUs',
        component: ContactUs,
      },
    ],
  },
  {
    path: '*',
    component: NotFoundPage,
  },
];

export default new Router({
  mode: 'history',
  routes,
});
