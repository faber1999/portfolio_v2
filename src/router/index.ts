import PageNotFound from '@/views/PageNotFound.vue'
import type { Component } from 'vue'
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import ProfileView from '../views/profile/ProfileView.vue'
// import ProjectsView from '@/views/projects/ProjectsView.vue'
import ExperienceView from '@/views/experience/ExperienceView.vue'
import EducationView from '@/views/education/EducationView.vue'

interface AppRoute extends Omit<RouteRecordRaw, 'meta'> {
  meta?: {
    icon?: () => Promise<{ default: Component }>
    title?: string
    description?: string
    transition?: string
  }
}

export const routes: AppRoute[] = [
  {
    path: '/',
    name: 'profile',
    component: ProfileView,
    meta: {
      icon: () => import('@/components/icons/IconProfile.vue'),
      title: 'Profile',
      transition: 'slide-right',
    },
  },
  // {
  //   path: '/projects',
  //   name: 'projects',
  //   component: ProjectsView,
  //   meta: {
  //     icon: () => import('@/components/icons/IconProjects.vue'),
  //     title: 'Projects',
  //     transition: 'slide-right',
  //   },
  // },
  {
    path: '/experience',
    name: 'experience',
    component: ExperienceView,
    meta: {
      icon: () => import('@/components/icons/IconWorkBag.vue'),
      transition: 'slide-right',
    },
  },
  {
    path: '/education',
    name: 'education',
    component: EducationView,
    meta: {
      icon: () => import('@/components/icons/IconEducation.vue'),
      transition: 'slide-right',
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: PageNotFound,
    meta: {
      title: '404 - Page not found',
      transition: 'slide-right',
    },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes as RouteRecordRaw[],
})

export default router
