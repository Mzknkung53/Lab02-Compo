import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '@/views/EventListView.vue'
import AboutView from '@/views/AboutView.vue'
import StudentListView from '@/views/StudentListView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'event-list-view',
      component: EventListView
    },
    {
      path: '/about',
      name: 'about',

      component: AboutView
    },
    {
      path: '/event/123',
      name: 'event-detail',
      component: EventDetailView,
    },
    {
      path: '/student',
      name: 'student',
      
      component: StudentListView
    }
  ]
})

export default router