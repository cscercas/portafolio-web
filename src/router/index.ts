import About from "@/pages/about/About.vue";
import Home from "@/pages/home/Home.vue";
import DigProjects from "@/pages/projects-dig/DigProjects.vue";
import FisProjects from "@/pages/projects-fis/FisProjects.vue";

import { createRouter, createWebHashHistory } from "vue-router";


export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/sobre-mi',
      name: 'sobremi',
      component: About
    },
    {
      path: '/proyectos-digitales',
      name: 'proyectosdig',
      component: DigProjects
    },
    {
      path: '/proyectos-fisicos',
      name: 'proyectosfis',
      component: FisProjects
    },
    {
      path: '/:pathMatch(.*)',
      redirect: '/'
    }
  ]
})