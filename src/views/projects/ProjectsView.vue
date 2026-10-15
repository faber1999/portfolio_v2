<script setup lang="ts">
import { computed, shallowRef, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import ProjectCard, {
  type Lang,
  type Detail,
  type PreviewVideo,
} from './components/ProjectCard.vue'
import ProjectModal from './components/ProjectModal.vue'
import IconProjects from '@/components/icons/IconProjects.vue'
import type { Translations } from '@/composables/useTranslate'

type Project = {
  /** URL key for deep links: /projects?project=<slug> */
  slug: string
  name: string
  description: Translations
  demoUrl?: string
  githubUrl?: string
  previewImage?: string
  previewVideo?: PreviewVideo
  techs?: Record<string, Lang[]>
  isPrivate?: boolean
  detail?: Detail[]
}

const projects: Project[] = [
  {
    slug: 'fw-webb',
    name: 'F.W. Webb',
    description: {
      en: 'B2B wholesale e-commerce platform in development at Smith. My frontend work covers product, cart, checkout, account, saved-list, and order-detail experiences.',
      es: 'Plataforma de comercio electrónico mayorista B2B en desarrollo en Smith. Mi trabajo frontend abarca las experiencias de producto, carrito, checkout, cuentas, listas guardadas y detalle de pedidos.',
    },
    demoUrl: 'https://ecomm-application-mobile-one.vercel.app/',
    previewImage: '/images/projects/fw-webb/home.webp',
    techs: {
      frontend: [
        { name: 'Next.js', icon: '/icons/nextjs.svg' },
        { name: 'React.js', icon: '/icons/react.svg' },
        { name: 'TypeScript', icon: '/icons/typescript.svg' },
        { name: 'Tailwind', icon: '/icons/tailwindcss.svg' },
        { name: 'Zustand', icon: '/icons/zustand.svg' },
        { name: 'TanStack Query', icon: '/icons/tanstack.svg' },
      ],
      backend: [{ name: 'Azure Functions', icon: '/icons/azure-function.svg' }],
      cms: [{ name: 'Contentstack', icon: '/icons/contentstack.svg' }],
      observability: [{ name: 'Datadog', icon: '/icons/datadog.svg' }],
    },
    detail: [
      {
        img: '/images/projects/fw-webb/home.webp',
        description: {
          en: 'F.W. Webb is the B2B wholesale e-commerce project I am currently working on at Smith. The platform is in development; the linked demo is a preview of the work in progress.\n\nMy contribution focuses on frontend development with Next.js 15, React 19, and TypeScript, translating Figma designs into responsive interfaces and integrating commerce APIs with TanStack Query and Zustand.',
          es: 'F.W. Webb es el proyecto de comercio electrónico mayorista B2B en el que trabajo actualmente en Smith. La plataforma está en desarrollo; la demo enlazada permite explorar una versión del trabajo en curso.\n\nMi contribución se centra en el desarrollo frontend con Next.js 15, React 19 y TypeScript, llevando diseños de Figma a interfaces adaptables e integrando APIs de comercio con TanStack Query y Zustand.',
        },
      },
      {
        img: '/images/projects/fw-webb/home-mobile.webp',
        description: {
          en: 'My work includes product, cart, and checkout flows for guest and authenticated purchases, shipping restrictions, and place-order error handling. I also contribute to account features, saved lists with search and sorting, and order-detail views.\n\nThese contributions are part of the ongoing project and do not imply that every feature is available in the public demo. The wider platform integrates Contentstack CMS and a BFF over Azure Functions.',
          es: 'Mi trabajo incluye flujos de producto, carrito y checkout para compras de invitados y usuarios autenticados, restricciones de envío y manejo de errores al realizar pedidos. También contribuyo a las funciones de cuenta, listas guardadas con búsqueda y ordenamiento, y vistas de detalle de pedidos.\n\nEstas contribuciones forman parte del proyecto en curso y no implican que todas las funciones estén disponibles en la demo pública. La plataforma integra Contentstack CMS y un BFF sobre Azure Functions.',
        },
      },
    ],
  },
  {
    slug: 'dsd',
    name: 'DSD',
    description: {
      en: 'Dynamic application for commercial roles such as self-sale, pre-sale, deliveries, and marketing, with modules and adaptable reports for each business.',
      es: 'Aplicación dinámica para figuras comerciales como autoventa, preventa, entregas y mercadeo, con módulos e informes adaptables a cada negocio.',
    },
    demoUrl: '',
    githubUrl: '',
    // Product screenshot on the card; the client-logo collage opens the modal gallery.
    previewImage: '/images/projects/dsd/image-2.webp',
    isPrivate: true,
    techs: {
      frontend: [
        { name: 'React.js', icon: '/icons/react.svg' },
        { name: 'Zustand', icon: '/icons/zustand.svg' },
        { name: 'Ant Design', icon: '/icons/antd.svg' },
        { name: 'Tailwind', icon: '/icons/tailwindcss.svg' },
        { name: 'Vite', icon: '/icons/vite.svg' },
        { name: 'JavaScript', icon: '/icons/javascript.svg' },
        { name: 'TypeScript', icon: '/icons/typescript.svg' },
      ],
      backend: [
        { name: '.NET Core', icon: '/icons/netcore.svg' },
        { name: 'C#', icon: '/icons/csharp.svg' },
        { name: 'SQL Server', icon: '/icons/sqlserver.svg' },
      ],
      devops: [
        { name: 'Azure', icon: '/icons/azuredevops.svg' },
        { name: 'SonarQube', icon: '/icons/sonarqube.svg' },
        { name: 'Jenkins', icon: '/icons/jenkins.svg' },
      ],
    },
    detail: [
      {
        img: '/images/projects/dsd/image-1.webp',
        description: {
          en: 'This project aims to comprehensively improve the operations of companies dedicated to the export of food and raw materials. Key aspects addressed include: order management, user administration on the platform, integrations with external systems, report generation, dashboard creation, route tracking through maps, and various additional operational tools. \n\nMy role as the leader of the frontend development team included managing the project architecture, overall organization, developing user interfaces, and integrating with the backend. Additionally, I made specific implementations in essential modules such as order management, integrations, and administration, contributing significantly to the success of the project.',
          es: 'Este proyecto tiene como objetivo mejorar de manera integral las operaciones de empresas dedicadas a la exportación de alimentos y materias primas. Entre los aspectos clave que se abordaron están: la gestión de pedidos, la administración de usuarios en la plataforma, integraciones con sistemas externos, generación de reportes, creación de dashboards, seguimiento de recorridos a través de mapas, y diversas herramientas operativas adicionales. \n\nMi rol como líder del equipo de desarrollo frontend incluyó la gestión de la arquitectura del proyecto, la organización general, el desarrollo de interfaces de usuario, y la integración con el backend. Además, realicé implementaciones específicas en módulos esenciales, como la gestión de pedidos, integraciones y administración, contribuyendo de manera significativa al éxito del proyecto.',
        },
      },
      {
        img: '/images/projects/dsd/image-3.webp',
        description: {
          en: 'For this project I implemented Clean Architecture, which allowed for a modular, scalable, and maintainable structure. I divided the work into three layers: the domain, which contains the core business logic; the infrastructure, which manages communication with the backend through repositories; and the UI, developed in React.js, where the framework is abstracted to ensure component reusability. \n\nThis organization ensures independence between layers, facilitates future expansions, and maintains the integrity of the project over time.',
          es: 'Para este proyecto implementé Clean Architecture, lo que permitió una estructura modular, escalable y fácil de mantener. Dividí el trabajo en tres capas: el dominio, que contiene la lógica central del negocio; la infraestructura, que gestiona la comunicación con el backend a través de repositorios; y la UI, desarrollada en React.js, donde se abstrae el framework para garantizar la reutilización de componentes. \n\nEsta organización asegura la independencia entre capas, facilita futuras expansiones y mantiene la integridad del proyecto a lo largo del tiempo.',
        },
      },
      {
        img: '/images/projects/dsd/image-4.webp',
        description: {
          en: 'I developed a core module of modular integrations that consists of two key parts: configuration and execution. The configuration allows setting the necessary parameters for the integrations through an intuitive graphical user interface. The execution processes and transforms data from files such as Excel, CSV, or TXT, as well as from databases, to store and organize them in the application database, ensuring efficient and structured integration.',
          es: 'Desarrollé un módulo fundamental de integraciones modulares que se compone de dos partes clave: configuración y ejecución. La configuración permite establecer los parámetros necesarios para las integraciones a través de una interfaz gráfica de usuario intuitiva. La ejecución procesa y transforma los datos provenientes de archivos como Excel, CSV o TXT, así como de bases de datos, para almacenarlos y organizarlos en la base de datos de la aplicación, asegurando una integración eficiente y estructurada.',
        },
      },
      {
        img: '/images/projects/dsd/image-2.webp',
        description: {
          en: 'Other key modules I developed include the administrators module, which manages and configures database information through SQL queries or tables; the order management module, which handles all aspects related to purchase orders, returns, reasons for non-purchase, and collections generated by sales; and the maps module, which graphically visualizes the routes of sellers in various cities in Colombia, providing a clear and useful representation for logistical analysis.',
          es: 'Otros módulos clave que desarrollé incluyen el módulo de administradores, que gestiona y configura la información de las bases de datos a través de consultas SQL o tablas; el módulo de gestión de pedidos, que maneja todos los aspectos relacionados con las órdenes de compra, devoluciones, motivos de no compra y recaudos generados por las ventas; y el módulo de mapas, que visualiza gráficamente los recorridos de los vendedores en diversas ciudades de Colombia, proporcionando una representación clara y útil para el análisis logístico.',
        },
      },
    ],
  },
  {
    slug: 'axon',
    name: 'Axon.js',
    description: {
      en: 'A lightweight frontend JavaScript framework I built for educational purposes, inspired by reactive systems like Vue.js.',
      es: 'Un framework frontend de JavaScript ligero que construí con fines educativos, inspirado en sistemas reactivos como Vue.js.',
    },
    demoUrl: 'https://axon-docs.fabergrajales.dev',
    githubUrl: 'https://github.com/faber1999/axon.js',
    previewImage: '/images/projects/axon/demo-poster.webp',
    previewVideo: {
      webm: '/images/projects/axon/demo.webm',
      mp4: '/images/projects/axon/demo.mp4',
    },
    isPrivate: false,
    techs: {
      frontend: [
        { name: 'Axon.js', icon: '/icons/axon.svg' },
        { name: 'JavaScript', icon: '/icons/javascript.svg' },
        { name: 'TypeScript', icon: '/icons/typescript.svg' },
        { name: 'Vite', icon: '/icons/vite.svg' },
        { name: 'Tailwind', icon: '/icons/tailwindcss.svg' },
      ],
    },
    detail: [
      {
        img: '/images/projects/axon/image-1.webp',
        description: {
          en: 'Axon.js uses fine-grained reactivity: a global effect stack tracks which signals are read during execution, creating subscriptions automatically. Components run only once — only the exact DOM nodes that depend on a signal update, with no diffing and no re-renders. This is achieved through core primitives: signal, effect, computed, batch, and untrack.\n\nUnlike frameworks that reconcile a Virtual DOM tree on every state change, Axon.js subscribes each DOM node directly to the signals it reads. When a signal updates, only the affected nodes are patched — making updates surgical and predictable regardless of component tree depth.\n\nThe batch primitive lets you group multiple signal writes so their effects run only once, while untrack lets you read a signal without creating a subscription — useful for one-time reads inside effects.',
          es: 'Axon.js usa reactividad de grano fino: un stack de efectos global rastrea qué señales se leen durante la ejecución, creando suscripciones automáticamente. Los componentes se ejecutan solo una vez — únicamente los nodos del DOM que dependen de una señal se actualizan, sin diffing ni re-renders. Esto se logra con primitivas como signal, effect, computed, batch y untrack.\n\nA diferencia de frameworks que reconcilian un árbol de Virtual DOM en cada cambio de estado, Axon.js suscribe cada nodo del DOM directamente a las señales que lee. Cuando una señal se actualiza, solo los nodos afectados se modifican — haciendo las actualizaciones quirúrgicas y predecibles sin importar la profundidad del árbol.\n\nLa primitiva batch permite agrupar múltiples escrituras de señales para que sus efectos se ejecuten una sola vez, mientras que untrack permite leer una señal sin crear una suscripción — útil para lecturas únicas dentro de efectos.',
        },
      },
      {
        img: '/images/projects/axon/image-2.webp',
        description: {
          en: 'The framework includes a complete component system with lifecycle hooks (onMount, onCleanup), control flow components (Show, For, Dynamic, Portal), and a Context API to avoid prop drilling. JSX syntax is supported out of the box via a custom Vite plugin, with the h function as the JSX factory.',
          es: 'El framework incluye un sistema de componentes completo con hooks de ciclo de vida (onMount, onCleanup), componentes de flujo de control (Show, For, Dynamic, Portal) y una Context API para evitar prop drilling. La sintaxis JSX está soportada desde el inicio mediante un plugin de Vite personalizado, usando la función h como JSX factory.',
        },
      },
      {
        img: '/images/projects/axon/image-3.webp',
        description: {
          en: 'Axon.js ships with a built-in router featuring lazy loading, route guards, and layout groups — as well as a Store system for global state management with select for derived values. View Transitions are also supported for animated route changes, all with zero external dependencies.',
          es: 'Axon.js incluye un router propio con lazy loading, guardias de ruta y grupos de layout, además de un sistema Store para el manejo de estado global con select para valores derivados. También soporta View Transitions para cambios de ruta animados, todo sin dependencias externas.',
        },
      },
    ],
  },
]

// Deep links: /projects?project=<slug> opens that project's modal. Opening pushes a history
// entry so the browser Back button closes the modal; closing pops it (or replaces the URL when the
// page was entered through the deep link itself).
const route = useRoute()
const router = useRouter()
let pushedByUs = false

const selectedProject = computed(
  () => projects.find((project) => project.slug === route.query.project) ?? null,
)
// Keeps the last project rendered while the dialog closes, so its content doesn't blank out.
const modalProject = shallowRef<Project>(projects[0])

watch(
  selectedProject,
  (project) => {
    if (project) modalProject.value = project
    else pushedByUs = false
  },
  { immediate: true },
)

function openProject(project: Project) {
  pushedByUs = true
  router.push({ query: { ...route.query, project: project.slug } })
}

function closeProject() {
  if (pushedByUs) {
    router.back()
    return
  }
  const query = { ...route.query }
  delete query.project
  router.replace({ query })
}

function withoutSlug(project: Project): Omit<Project, 'slug'> {
  const rest: Partial<Project> = { ...project }
  delete rest.slug
  return rest as Omit<Project, 'slug'>
}
</script>

<template>
  <div class="view-stack flex flex-col flex-1 min-h-full gap-6 xl:flex-row">
    <div
      class="surface-panel flex flex-col gap-5 sm:gap-6 bg-tertiary p-3 sm:p-5 md:p-8 rounded-2xl w-full min-w-0"
    >
      <h1 class="flex items-center gap-2 text-primary self-center text-xl md:text-2xl lg:text-3xl">
        <IconProjects class="size-7 shrink-0 md:size-8" aria-hidden="true" />
        {{ $t('projects.title') }}
      </h1>

      <hr class="border-black/20 w-10/12 self-center dark:border-white/15" />

      <div class="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 sm:gap-6 items-start">
        <ProjectCard
          v-for="project in projects"
          :key="project.name"
          v-bind="withoutSlug(project)"
          @select="openProject(project)"
        />
      </div>

      <ProjectModal
        :open="!!selectedProject"
        v-bind="withoutSlug(modalProject)"
        @close="closeProject"
      />
    </div>
  </div>
</template>
