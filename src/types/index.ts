export interface Technology {
  name: string
  type: string
  reason: string
}

export interface Project {
  id: string
  title: string
  description: string
  difficulty: string
  estimated_time: string
  category: string
  technologies: Technology[]
  features: string[]
  generated_at: string
}
