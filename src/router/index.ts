import AboutView from '@/views/AboutView.vue'
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
      icon: () => import('@/components/icons/IconTooling.vue'),
      title: 'Profile',
      description: 'This is my awesome profile',
      transition: 'slide-left',
    },
  },
  {
    path: '/projects',
    name: 'Projects',
    component: AboutView,
    meta: {
      icon: () => import('@/components/icons/IconCommunity.vue'),
      title: 'Projects',
      description: 'This is my awesome projects',
      transition: 'slide-up',
    },
  },
  {
    path: '/skills',
    name: 'Skills',
    component: AboutView,
    meta: {
      icon: () => import('@/components/icons/IconCommunity.vue'),
      title: 'Skills',
      description: 'This is my awesome skills',
      transition: 'slide-right',
    },
  },
  {
    path: '/education',
    name: 'Education',
    component: AboutView,
    meta: {
      icon: () => import('@/components/icons/IconCommunity.vue'),
      title: 'Education',
      description: 'This is my awesome education',
      transition: 'slide-down',
    },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes as RouteRecordRaw[],
})

export default router
