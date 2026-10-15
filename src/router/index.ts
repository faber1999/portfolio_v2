import i18n from '@/langs'
import PageNotFound from '@/views/PageNotFound.vue'
import { watch, type Component } from 'vue'
import {
  createRouter,
  createWebHistory,
  type RouteLocationNormalizedLoaded,
  type RouteRecordRaw,
} from 'vue-router'
import ProfileView from '../views/profile/ProfileView.vue'
// import ProjectsView from '@/views/projects/ProjectsView.vue'
import ExperienceView from '@/views/experience/ExperienceView.vue'
import EducationView from '@/views/education/EducationView.vue'
import ProjectsView from '@/views/projects/ProjectsView.vue'

interface AppRoute extends Omit<RouteRecordRaw, 'meta'> {
  meta?: {
    icon?: () => Promise<{ default: Component }>
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
      transition: 'slide-right',
    },
  },
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
    path: '/projects',
    name: 'projects',
    component: ProjectsView,
    meta: {
      icon: () => import('@/components/icons/IconProjects.vue'),
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
      transition: 'slide-right',
    },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes as RouteRecordRaw[],
})

// --- Per-route <title>, meta description and canonical (localized, refreshed on locale change) ---
const SITE_URL = 'https://fabergrajales.dev'
const HOME_ROUTE = 'profile'

function setMeta(selector: string, attr: 'content' | 'href', value: string) {
  document.head.querySelector(selector)?.setAttribute(attr, value)
}

function applyRouteSeo(route: RouteLocationNormalizedLoaded) {
  const { t, te } = i18n.global
  const name = route.name?.toString() ?? 'not-found'

  document.title =
    name === HOME_ROUTE || !te(`meta.titles.${name}`)
      ? t('meta.home-title')
      : `${t(`meta.titles.${name}`)} · ${t('meta.title-suffix')}`

  const descriptionKey = `meta.descriptions.${name}`
  const description = t(te(descriptionKey) ? descriptionKey : `meta.descriptions.${HOME_ROUTE}`)
  setMeta('meta[name="description"]', 'content', description)

  const url = name === 'not-found' ? `${SITE_URL}/` : `${SITE_URL}${route.path}`
  setMeta('link[rel="canonical"]', 'href', url)
  setMeta('meta[property="og:url"]', 'content', url)
}

router.afterEach((to) => applyRouteSeo(to))
watch(i18n.global.locale, () => applyRouteSeo(router.currentRoute.value))

export default router
