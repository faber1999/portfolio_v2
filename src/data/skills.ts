// Skills shown in the profile's skills summary, grouped by level in the order
// expert > advanced > intermediate > beginner (order inside a level is kept).
//
// To add a skill: add { name, level, icon } below; put the logo in public/icons/.
import type { Skill } from './types'

export const skills: Skill[] = [
  { name: 'React', level: 'expert', icon: '/icons/react.svg' },
  { name: 'SQL Server', level: 'expert', icon: '/icons/sqlserver.svg' },
  { name: 'Next.js', level: 'advanced', icon: '/icons/nextjs.svg' },
  { name: 'Vue.js', level: 'advanced', icon: '/icons/vue.svg' },
  { name: 'Angular', level: 'advanced', icon: '/icons/angular.svg' },
  { name: 'JavaScript', level: 'advanced', icon: '/icons/javascript.svg' },
  { name: 'TypeScript', level: 'advanced', icon: '/icons/typescript.svg' },
  { name: 'Node.js', level: 'intermediate', icon: '/icons/nodejs.svg' },
  { name: 'NestJS', level: 'intermediate', icon: '/icons/nestjs.svg' },
  { name: 'C#', level: 'intermediate', icon: '/icons/csharp.svg' },
  { name: 'Git', level: 'intermediate', icon: '/icons/git.svg' },
  { name: 'Supabase', level: 'intermediate', icon: '/icons/supabase.svg' },
  { name: 'Jenkins', level: 'beginner', icon: '/icons/jenkins.svg' },
  { name: 'n8n', level: 'beginner', icon: '/icons/n8n.svg' },
]
