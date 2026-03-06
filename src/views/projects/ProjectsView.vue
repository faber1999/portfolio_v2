<script setup lang="ts">
import { ref } from 'vue'
import ProjectCard, { type Lang, type Detail } from './components/ProjectCard.vue'
import ProjectModal from './components/ProjectModal.vue'
import IconProjects from '@/components/icons/IconProjects.vue'
import type { Translations } from '@/composables/useTranslate'

type Project = {
  name: string
  description: Translations
  demoUrl?: string
  githubUrl?: string
  previewGif?: string
  techs?: Record<string, Lang[]>
  isPrivate?: boolean
  detail?: Detail[]
}

const projects: Project[] = [
  {
    name: 'DSD',
    description: {
      en: 'Dynamic application for commercial figures such as, self-sale, pre-sale, marketing, deliveries, marketing with modules and adaptable reports for each business.',
      es: 'Aplicación dinámica para figuras comerciales como, autoventa, preventa, mercadeo, entregas, mercadeo con módulos e informes adaptables a cada negocio.',
    },
    demoUrl: '',
    githubUrl: '',
    previewGif: '/images/projects/dsd/image-1.webp',
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
      DevOps: [
        { name: 'Azure', icon: '/icons/azuredevops.svg' },
        { name: 'SonarQube', icon: '/icons/sonarqube.svg' },
        { name: 'Jenkins', icon: '/icons/jenkins.svg' },
      ],
    },
    detail: [
      {
        img: '/images/projects/dsd/image-2.webp',
        description: {
          en: 'This project aims to comprehensively improve the operations of companies dedicated to the export of food and raw materials. Key aspects addressed include: order management, user administration on the platform, integrations with external systems, report generation, dashboard creation, route tracking through maps, and various additional operational tools. \n\nMy role as the leader of the frontend development team included managing the project architecture, overall organization, developing user interfaces, and integrating with the backend. Additionally, I made specific implementations in essential modules such as order management, integrations, and administration, contributing significantly to the success of the project.',
          es: 'Este proyecto tiene como objetivo mejorar de manera integral las operaciones de empresas dedicadas a la exportación de alimentos y materias primas. Entre los aspectos clave que se abordaron están: la gestión de pedidos, la administración de usuarios en la plataforma, integraciones con sistemas externos, generación de reportes, creación de dashboards, seguimiento de recorridos a través de mapas, y diversas herramientas operativas adicionales. \n\nMi rol como líder del equipo de desarrollo frontend incluyó la gestión de la arquitectura del proyecto, la organización general, el desarrollo de interfaces de usuario, y la integración con el backend. Además, realicé implementaciones específicas en módulos esenciales, como la gestión de pedidos, integraciones y administración, contribuyendo de manera significativa al éxito del proyecto.',
        },
      },
      {
        img: '/images/projects/dsd/image-3.webp',
        description: {
          en: 'For this project I implemented Clean Architecture, which allowed for a modular, scalable, and maintainable structure. I divided the work into three layers: the domain, which contains the core business logic; the infrastructure, which manages communication with the backend through repositories; and the UI, developed in React JS, where the framework is abstracted to ensure component reusability. \n\nThis organization ensures independence between layers, facilitates future expansions, and maintains the integrity of the project over time.',
          es: 'Para este proyecto implementé Clean Architecture, lo que permitió una estructura modular, escalable y fácil de mantener. Dividí el trabajo en tres capas: el dominio, que contiene la lógica central del negocio; la infraestructura, que gestiona la comunicación con el backend a través de repositorios; y la UI, desarrollada en React JS, donde se abstrae el framework para garantizar la reutilización de componentes. \n\nEsta organización asegura la independencia entre capas, facilita futuras expansiones y mantiene la integridad del proyecto a lo largo del tiempo.',
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
        description: {
          en: 'Other key modules I developed include the administrators module, which manages and configures database information through SQL queries or tables; the order management module, which handles all aspects related to purchase orders, returns, reasons for non-purchase, and collections generated by sales; and the maps module, which graphically visualizes the routes of sellers in various cities in Colombia, providing a clear and useful representation for logistical analysis.',
          es: 'Otros modulos clave que desarrollé incluyen el módulo de administradores, que gestiona y configura la información de las bases de datos a través de consultas SQL o tablas; el módulo de gestión de pedidos, que maneja todos los aspectos relacionados con las órdenes de compra, devoluciones, motivos de no compra y recaudos generados por las ventas; y el módulo de mapas, que visualiza gráficamente los recorridos de los vendedores en diversas ciudades de Colombia, proporcionando una representación clara y útil para el análisis logístico.',
        },
      },
    ],
  },
  {
    name: 'Axon.js',
    description: {
      en: 'A lightweight frontend JavaScript framework I built for educational purposes, inspired by reactive systems like Vue.js.',
      es: 'Un framework frontend de JavaScript ligero que construí con fines educativos, inspirado en sistemas reactivos como Vue.js.',
    },
    demoUrl: 'https://axon-docs.fabergrajales.dev',
    githubUrl: 'https://github.com/faber1999/axon.js',
    previewGif: '/images/projects/axon/demo.gif',
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
        img: '/images/projects/axon/image-1.png',
        description: {
          en: 'Axon.js uses fine-grained reactivity: a global effect stack tracks which signals are read during execution, creating subscriptions automatically. Components run only once — only the exact DOM nodes that depend on a signal update, with no diffing and no re-renders. This is achieved through core primitives: signal, effect, computed, batch, and untrack.\n\nUnlike frameworks that reconcile a Virtual DOM tree on every state change, Axon.js subscribes each DOM node directly to the signals it reads. When a signal updates, only the affected nodes are patched — making updates surgical and predictable regardless of component tree depth.\n\nThe batch primitive lets you group multiple signal writes so their effects run only once, while untrack lets you read a signal without creating a subscription — useful for one-time reads inside effects.',
          es: 'Axon.js usa reactividad de grano fino: un stack de efectos global rastrea qué señales se leen durante la ejecución, creando suscripciones automáticamente. Los componentes se ejecutan solo una vez — únicamente los nodos del DOM que dependen de una señal se actualizan, sin diffing ni re-renders. Esto se logra con primitivas como signal, effect, computed, batch y untrack.\n\nA diferencia de frameworks que reconcilian un árbol de Virtual DOM en cada cambio de estado, Axon.js suscribe cada nodo del DOM directamente a las señales que lee. Cuando una señal se actualiza, solo los nodos afectados se modifican — haciendo las actualizaciones quirúrgicas y predecibles sin importar la profundidad del árbol.\n\nLa primitiva batch permite agrupar múltiples escrituras de señales para que sus efectos se ejecuten una sola vez, mientras que untrack permite leer una señal sin crear una suscripción — útil para lecturas únicas dentro de efectos.',
        },
      },
      {
        img: '/images/projects/axon/image-2.png',
        description: {
          en: 'The framework includes a complete component system with lifecycle hooks (onMount, onCleanup), control flow components (Show, For, Dynamic, Portal), and a Context API to avoid prop drilling. JSX syntax is supported out of the box via a custom Vite plugin, with the h function as the JSX factory.',
          es: 'El framework incluye un sistema de componentes completo con hooks de ciclo de vida (onMount, onCleanup), componentes de flujo de control (Show, For, Dynamic, Portal) y una Context API para evitar prop drilling. La sintaxis JSX está soportada desde el inicio mediante un plugin de Vite personalizado, usando la función h como JSX factory.',
        },
      },
      {
        img: '/images/projects/axon/image-3.png',
        description: {
          en: 'Axon.js ships with a built-in router featuring lazy loading, route guards, and layout groups — as well as a Store system for global state management with select for derived values. View Transitions are also supported for animated route changes, all with zero external dependencies.',
          es: 'Axon.js incluye un router propio con lazy loading, guardias de ruta y grupos de layout, además de un sistema Store para el manejo de estado global con select para valores derivados. También soporta View Transitions para cambios de ruta animados, todo sin dependencias externas.',
        },
      },
    ],
  },
]

const selectedProject = ref<Project | null>(null)
</script>

<template>
  <div class="flex flex-col flex-1 h-fit min-h-full gap-4 xl:flex-row max-h-full">
    <div class="flex flex-col gap-6 bg-tertiary p-4 rounded-lg w-full">
      <div
        class="flex flex-col items-center gap-2 text-primary self-center text-xl md:flex-row md:text-2xl lg:text-3xl"
      >
        <IconProjects class="size-8" />
        {{ $t('projects.title') }}
      </div>

      <hr class="border-black/20 w-10/12 self-center dark:border-white/15" />

      <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 p-2 overflow-y-active">
        <ProjectCard
          v-for="project in projects"
          :key="project.name"
          v-bind="project"
          @select="selectedProject = project"
        />
      </div>

      <ProjectModal
        :open="!!selectedProject"
        :name="selectedProject?.name ?? ''"
        :description="selectedProject?.description ?? { en: '', es: '' }"
        :demo-url="selectedProject?.demoUrl"
        :github-url="selectedProject?.githubUrl"
        :preview-gif="selectedProject?.previewGif"
        :techs="selectedProject?.techs"
        :is-private="selectedProject?.isPrivate"
        :detail="selectedProject?.detail"
        @close="selectedProject = null"
      />
    </div>
  </div>
</template>
