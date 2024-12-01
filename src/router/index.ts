import { createRouter, createWebHistory } from 'vue-router'

// Views
import HomeView from '@/views/HomeView.vue'
import RoomsView from '@/views/RoomsView.vue'
import RoomView from '@/views/RoomsView.vue'
import AboutView from '@/views/AboutView.vue'
import ContactView from '@/views/ContactView.vue'
import BookView from '@/views/BookView.vue'
import HotelsAndSpaView from '@/views/HotelsAndSpaView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Forside',
      component: HomeView,
      meta: {
        showHeader: true,
        showFooter: false
      }
    },
    {
      path: '/vaerelser',
      name: 'Værelser',
      component: RoomsView,
      meta: {
        showHeader: true,
        showFooter: false
      }
    },
    {
      path: '/vaerelser/:id',
      name: 'Værelse',
      props: true,
      component: RoomView,
      meta: {
        showHeader: false,
        showFooter: false
      }
    },
    {
      path: '/om-hotels',
      name: 'Om Hotels',
      component: AboutView,
      meta: {
        showHeader: true,
        showFooter: true,
        footerTitle: 'Om Alpha Hotels'
      }
    },
    {
      path: '/kontakt',
      name: 'Kontakt',
      component: ContactView,
      meta: {
        showHeader: true
      }
    },
    {
      path: '/Book',
      name: 'Book',
      component: BookView,
      meta: {
        showHeader: true
      }
    },
    {
      path: '/',
      name: 'Hotels & Spa',
      component: HotelsAndSpaView,
      meta: {
        showHeader: false,
        showFooter: true,
        footerTitle: 'Hotels & Spa'
      }
    }
  ],
})

export default router
