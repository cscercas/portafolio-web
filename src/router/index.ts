import About from "@/pages/about/About.vue";
import Comisiones from "@/pages/comisiones/Comisiones.vue";
import Contacto from "@/pages/contacto/Contacto.vue";
import Home from "@/pages/home/Home.vue";
import CharacterDesign from "@/pages/projects-dig/CharacterDesign.vue";
import DigProjects from "@/pages/projects-dig/DigProjects.vue";
import Fanart from "@/pages/projects-dig/Fanart.vue";
import Illustration from "@/pages/projects-dig/Illustration.vue";
import Drawing from "@/pages/projects-fis/Drawing.vue";
import FisProjects from "@/pages/projects-fis/FisProjects.vue";
import Painting from "@/pages/projects-fis/Painting.vue";
import Sculpture from "@/pages/projects-fis/Sculpture.vue";

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
      path: '/about-me',
      name: 'about',
      component: About
    },
    {
      path: '/proyectos-digitales',
      name: 'proyectosdig',
      component: DigProjects,
      children: [ 
        {
         path: 'illustration',
        name: 'illustration',
        component: Illustration
        },
       {
         path: 'character-design',
        name: 'character',
        component: CharacterDesign
        },
        {
         path: 'fanart',
        name: 'fanart',
        component: Fanart
        },
      ]
    },
    {
      path: '/proyectos-fisicos',
      name: 'proyectosfis',
      component: FisProjects,
      children: [ 
        {
         path: 'drawing',
        name: 'drawing',
        component: Drawing
        },
       {
         path: 'painting',
        name: 'painting',
        component: Painting
        },
        {
         path: 'sculpture',
        name: 'sculpture',
        component: Sculpture
        },
      ]
    },
    {
      path: '/comisiones',
      name: 'comisiones',
      component: Comisiones
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: Contacto
    },
    {
      path: '/:pathMatch(.*)',
      redirect: '/'
    }
  ]
})