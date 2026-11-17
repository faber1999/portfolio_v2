<script setup lang="ts">
import { computed, shallowRef, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import ProjectCard from './components/ProjectCard.vue'
import ProjectModal from './components/ProjectModal.vue'
import IconProjects from '@/components/icons/IconProjects.vue'
import { projects } from '@/data/projects'
import type { Project } from '@/data/types'

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
