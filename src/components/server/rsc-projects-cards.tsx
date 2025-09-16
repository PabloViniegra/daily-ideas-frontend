import { getDailyProjects } from '@/lib/daily'
import ProjectCards from '@/components/ui/project-cards'

export default async function ProjectsCards() {
  const projects = await getDailyProjects()
  return <ProjectCards projects={projects} />
}
