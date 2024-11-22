import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: { name: "home" }
    },
    {
      path: "/home",
      name: "home",
      component: () => import('../views/client/Home.vue')
    },
    {
      path: "/instalaciones",
      name: "instalaciones",
      component: () => import('../views/client/Instalaciones.vue')
    },
    {
      path: "/servicios",
      name: "servicios",
      component: () => import('../views/client/Servicios.vue')
    },
    {
      path: "/entrenadores",
      name: "entrenadores",
      component: () => import('../views/client/Entrenadores.vue')
    },
    {
      path: "/auth",
      name: "auth",
      component: () => import('../views/client/Auth.vue')
    },

    {
      path: "/entrenadorDashboard",
      name: "entrenadorDashboard",
      component: () => import('../views/dashboards/EntrenadorDashboard.vue'),  // Vista principal del entrenador
      children: [
        {
          path: "",  // Si está vacío, se mostrará por defecto la vista de Listar Entrenamientos
          name: "entrenadorListarEntrenamientos",
          component: () => import('../components/dashboards/entrenador/ListEntrenamientosDashboard.vue'),  // Vista para listar entrenamientos
        },
        {
          path: "crear-entrenamiento",
          name: "entrenadorCrearEntrenamiento",
          component: () => import('../components/dashboards/entrenador/CreateEntrenamientoDashboard.vue'),  // Vista para crear un nuevo entrenamiento
        }
      ]
    },
    {
      path: "/admin",
      name: "adminDashboard",
      component: () => import('../views/dashboards/AdminDashboard.vue'),
      children: [
        {
          path: "",  
          name: "adminListar",
          component: () => import('../components/dashboards/admin/ListarAdmin.vue'),
        },
        {
          path: "crear",
          name: "adminCrear",
          component: () => import('../components/dashboards/admin/CrearAdmin.vue'),
        },
        {
          path: 'editar/pista/:slug', 
          name: 'adminEditarPista',
          component: () => import('../components/dashboards/admin/CrearAdmin.vue'),
          props: { tipo: 'pista' },  
        },
        {
          path: 'editar/deporte/:slug', 
          name: 'adminEditarDeporte',
          component: () => import('../components/dashboards/admin/CrearAdmin.vue'),
          props: { tipo: 'deporte' }, 
        },
      ]

    },
  ]
})

export default router