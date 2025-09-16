'use server'

import { regenerate } from '@/lib/daily'
import { revalidatePath } from 'next/cache'

export default async function regenerateAction(formData: FormData) {
  const rawCategory = formData.get('category')
  const rawCount = formData.get('count')
  const rawDifficulty = formData.getAll('difficulty')

  const category =
    typeof rawCategory === 'string' && rawCategory.trim()
      ? rawCategory
      : 'Web Development'

  const count =
    typeof rawCount === 'string' && rawCount.trim()
      ? Number.parseInt(rawCount, 10)
      : 5

  const difficultyStrings = rawDifficulty.filter(
    (v): v is string => typeof v === 'string' && v.trim().length > 0
  )

  const difficulty =
    difficultyStrings.length > 0
      ? difficultyStrings
      : ['beginner', 'intermediate', 'advanced']

  const data = await regenerate({ category, count, difficulty })
  console.log(`Regenerated ${data.length} projects`)
  revalidatePath('/')
}
