import AboutView from '@/views/AboutView.vue'
import EducationView from '@/views/EducationView.vue'
import PageNotFound from '@/views/PageNotFound.vue'
import type { Component } from 'vue'
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import HomeView from '../views/ProfileView.vue'

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
    component: HomeView,
    meta: {
      icon: () => import('@/components/icons/IconProfile.vue'),
      title: 'Profile',
      description: 'This is my awesome profile',
      transition: 'slide-right',
    },
  },
  {
    path: '/projects',
    name: 'projects',
    component: AboutView,
    meta: {
      icon: () => import('@/components/icons/IconProjects.vue'),
      title: 'Projects',
      description: 'This is my awesome projects',
      transition: 'slide-right',
    },
  },
  {
    path: '/skills',
    name: 'skills',
    component: AboutView,
    meta: {
      icon: () => import('@/components/icons/IconSkills.vue'),
      title: 'Skills',
      description: 'This is my awesome skills',
      transition: 'slide-right',
    },
  },
  {
    path: '/education',
    name: 'education',
    component: EducationView,
    meta: {
      icon: () => import('@/components/icons/IconEducation.vue'),
      title: 'Education',
      description: 'This is my awesome education',
      transition: 'slide-right',
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: PageNotFound,
    meta: {
      title: '404 - Page not found',
      description: 'Page not found',
      transition: 'slide-right',
    },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes as RouteRecordRaw[],
})

export default router
