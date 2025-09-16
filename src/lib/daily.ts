import { API_URL } from '@/consts'
import { Project } from '@/types'

export const getDailyProjects = async (
  count: number = 5,
  forceRegenerate: boolean = false
): Promise<Project[]> => {
  const url = `${API_URL}/api/v1/daily?count=${count}&forceRegenerate=${forceRegenerate}`

  const res = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
  })

  if (!res.ok) throw new Error('Failed to fetch daily projects')

  return res.json()
}

export const regenerate = async ({
  category = 'Web Development',
  count = 5,
  difficulty = ['beginner', 'intermediate', 'advanced'],
}: {
  category: string
  count?: number
  difficulty: string[]
}): Promise<Project[]> => {
  const url = `${API_URL}/api/v1/generate`
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      category_preference: category,
      count,
      difficulty_preference: difficulty,
    }),
  })

  if (!res.ok) throw new Error('Failed to regenerate daily projects')

  return res.json()
}
