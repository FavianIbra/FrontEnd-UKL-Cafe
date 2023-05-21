import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import AdminHome from '../views/Admin/AdminHome.vue'
import ManageUser from '../views/Admin/ManageUser.vue'
import ManageMenu from '../views/Admin/ManageMenu.vue'
import ManageMeja from '../views/Admin/ManageMeja.vue'

import KasirHome from '../views/Kasir/KasirHome.vue'
import TransaksiPage from '../views/Kasir/TransaksiPage.vue'
import AddMenu from '../views/Kasir/AddMenu.vue'
import OnGoing from '../views/Kasir/OnGoing.vue'
import HistoryView from '../views/Kasir/HistoryView.vue'
import PrintNota from '../views/Kasir/PrintNota.vue'


import ManagerHome from '../views/Manager/ManagerHome.vue'
import ProfitView from '../views/Manager/ProfitView.vue'
import FilterTransaksi from '../views/Manager/FilterTransaksi.vue'
import AllTransaksi from '../views/Manager/AllTransaksi.vue'
import LoginPage from '../views/LoginPage.vue'

import NotFound from '../views/NotFound.vue'
import SalahAkses from '../views/SalahAkses.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: LoginPage
  },
  {
    path: '/admin',
    component: AdminHome,
    meta: {
      requiresAuth: true,
      allowedRoles: ['Admin']
    }
  },
  {
    path: '/manageuser',
    component: ManageUser,
    meta: {
      requiresAuth: true,
      allowedRoles: ['Admin']
    }
  },
  {
    path: '/managemenu',
    component: ManageMenu,
    meta: {
      requiresAuth: true,
      allowedRoles: ['Admin']
    }
  },
  {
    path: '/managetable',
    component: ManageMeja,
    meta: {
      requiresAuth: true,
      allowedRoles: ['Admin']
    }
  },
  {
    path: '/kasir',
    component: KasirHome,
    meta: {
      requiresAuth: true,
      allowedRoles: ['Kasir']
    }
  },
  {
    path: '/transaksi',
    component: TransaksiPage,
    meta: {
      requiresAuth: true,
      allowedRoles: ['Kasir']
    }
  },
  {
    path: '/addmenu',
    component: AddMenu,
    meta: {
      requiresAuth: true,
      allowedRoles: ['Kasir']
    }
  },
  {
    path: '/ongoing',
    component: OnGoing,
    meta: {
      requiresAuth: true,
      allowedRoles: ['Kasir']
    }
  },
  {
    path: '/history',
    component: HistoryView,
    meta: {
      requiresAuth: true,
      allowedRoles: ['Kasir']
    }
  },
  {
    path: '/print/:id',
    component: PrintNota,
    meta: {
      requiresAuth: true,
      allowedRoles: ['Kasir']
    }
  },
  {
    path: '/manager',
    component: ManagerHome,
    meta: {
      requiresAuth: true,
      allowedRoles: ['Manajer']
    }
  },
  {
    path: '/filtertransaksi',
    component: FilterTransaksi,
    meta: {
      requiresAuth: true,
      allowedRoles: ['Manajer']
    }
  },
  {
    path: '/alltransaksi',
    component: AllTransaksi,
    meta: {
      requiresAuth: true,
      allowedRoles: ['Manajer']
    }
  },
  {
    path: '/profit',
    component: ProfitView,
    meta: {
      requiresAuth: true,
      allowedRoles: ['Manajer']
    }
  },
  {
    path: '*',
    component: NotFound
  },
  {
    path: '/forbidden',
    component: SalahAkses
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

router.beforeEach((to,form, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth)
  if (requiresAuth) {
    const userRole = localStorage.getItem("role")
    if (!userRole) {
      next({
        path: '/'
      })
    } else {
      if (to.meta.allowedRoles.includes(userRole)) {
        next()
      } else {
        next({
          path: '/forbidden'
        })
      }
    }
  } else {
    next();
  }
})