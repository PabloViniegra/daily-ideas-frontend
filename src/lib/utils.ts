import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import type { JSX } from 'react'
import {
  NextjsIcon,
  ReactIcon,
  VueIcon,
  NuxtIcon,
  ElectronIcon,
  D3Icon,
  NodeIcon,
  MongoIcon,
  SupabaseIcon,
  TypescriptIcon,
  PrismaIcon,
  TailwindIcon,
  tRPCIcon,
} from '@/components/ui/technology-icons'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Technology icon resolver
export type IconComponent = (props: { className?: string }) => JSX.Element

/**
 * @deprecated Use the new intelligent technology matcher instead.
 * This function is kept for backward compatibility but will be removed in the future.
 */
export function findTechnologyIcon(name?: string): IconComponent | null {
  if (!name) return null

  // Import the new matcher dynamically to avoid circular dependencies
  import('./technology-matcher')
    .then(async ({ getTechnologyIcon }) => {
      return await getTechnologyIcon(name)
    })
    .catch(() => null)

  // Fallback to legacy system for now
  const LEGACY_MAP: Record<string, IconComponent> = {
    next: NextjsIcon,
    nextjs: NextjsIcon,
    'next.js': NextjsIcon,
    react: ReactIcon,
    vue: VueIcon,
    vuejs: VueIcon,
    nuxt: NuxtIcon,
    nuxtjs: NuxtIcon,
    electron: ElectronIcon,
    d3: D3Icon,
    d3js: D3Icon,
    node: NodeIcon,
    nodejs: NodeIcon,
    mongodb: MongoIcon,
    mongo: MongoIcon,
    supabase: SupabaseIcon,
    typescript: TypescriptIcon,
    ts: TypescriptIcon,
    prisma: PrismaIcon,
    tailwind: TailwindIcon,
    tailwindcss: TailwindIcon,
    trpc: tRPCIcon,
  }

  const key = name.trim().toLowerCase()
  return LEGACY_MAP[key] ?? null
}
