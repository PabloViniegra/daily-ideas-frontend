import type { IconComponent } from './utils'

interface TechnologyConfig {
  canonical: string
  icon: IconComponent
  keywords: string[]
  aliases: string[]
  patterns: string[]
}

import {
  NextjsIcon,
  ReactIcon,
  VueIcon,
  NuxtIcon,
  TypescriptIcon,
  NodeIcon,
  MongoIcon,
  SupabaseIcon,
  PrismaIcon,
  TailwindIcon,
  tRPCIcon,
  ElectronIcon,
  D3Icon,
  PythonIcon,
  FlaskIcon,
  PostgreSqlIcon,
  AstroIcon,
  VercelIcon,
  SvelteIcon,
  StripeIcon,
  StrapiIcon,
  HeroUIIcon,
  MarkdownIcon,
  DrizzleORMIcon,
  FastAPIIcon,
  TauriIcon,
  CSSICon,
  HTMLIcon,
  JavaIcon,
  DockerIcon,
  JavascriptIcon,
} from '@/components/ui/technology-icons'

const TECHNOLOGY_DATABASE: TechnologyConfig[] = [
  {
    canonical: 'Next.js',
    icon: NextjsIcon,
    keywords: ['next', 'nextjs', 'Next.js'],
    aliases: ['next.js', 'nextjs', 'next', 'Next.js'],
    patterns: ['next\\s*\\.?js\\s*\\d*', 'next\\s+\\d+', 'nextjs\\s*\\d*'],
  },
  {
    canonical: 'React',
    icon: ReactIcon,
    keywords: ['react'],
    aliases: ['react', 'reactjs', 'react.js'],
    patterns: ['react\\s*\\.?js\\s*\\d*', 'react\\s+\\d+', 'react\\s+native'],
  },
  {
    canonical: 'Vue.js',
    icon: VueIcon,
    keywords: ['vue'],
    aliases: ['vue', 'vuejs', 'vue.js'],
    patterns: ['vue\\s*\\.?js\\s*\\d*', 'vue\\s+\\d+'],
  },
  {
    canonical: 'Nuxt.js',
    icon: NuxtIcon,
    keywords: ['nuxt'],
    aliases: ['nuxt', 'nuxtjs', 'nuxt.js'],
    patterns: ['nuxt\\s*\\.?js\\s*\\d*', 'nuxt\\s+\\d+'],
  },
  {
    canonical: 'TypeScript',
    icon: TypescriptIcon,
    keywords: ['typescript', 'ts'],
    aliases: ['typescript', 'ts'],
    patterns: ['type\\s*script', 'ts\\s*\\d*'],
  },
  {
    canonical: 'Node.js',
    icon: NodeIcon,
    keywords: ['node', 'nodejs'],
    aliases: ['node', 'nodejs', 'node.js'],
    patterns: ['node\\s*\\.?js\\s*\\d*', 'node\\s+\\d+'],
  },
  {
    canonical: 'MongoDB',
    icon: MongoIcon,
    keywords: ['mongo', 'mongodb'],
    aliases: ['mongodb', 'mongo', 'mongo db'],
    patterns: ['mongo\\s*db'],
  },
  {
    canonical: 'Supabase',
    icon: SupabaseIcon,
    keywords: ['supabase'],
    aliases: ['supabase'],
    patterns: ['supa\\s*base'],
  },
  {
    canonical: 'Prisma',
    icon: PrismaIcon,
    keywords: ['prisma'],
    aliases: ['prisma', 'prisma orm'],
    patterns: ['prisma\\s*orm'],
  },
  {
    canonical: 'Tailwind CSS',
    icon: TailwindIcon,
    keywords: ['tailwind'],
    aliases: ['tailwind', 'tailwindcss', 'tailwind css'],
    patterns: ['tailwind\\s*css'],
  },
  {
    canonical: 'tRPC',
    icon: tRPCIcon,
    keywords: ['trpc'],
    aliases: ['trpc', 't-rpc', 't rpc'],
    patterns: ['t\\s*-?\\s*rpc'],
  },
  {
    canonical: 'Electron',
    icon: ElectronIcon,
    keywords: ['electron'],
    aliases: ['electron'],
    patterns: ['electron\\s*js'],
  },
  {
    canonical: 'D3.js',
    icon: D3Icon,
    keywords: ['d3'],
    aliases: ['d3', 'd3js', 'd3.js'],
    patterns: ['d3\\s*\\.?js'],
  },
  {
    canonical: 'Python',
    icon: PythonIcon,
    keywords: ['python'],
    aliases: ['python'],
    patterns: ['python\\s*\\.?js'],
  },
  {
    canonical: 'Flask',
    icon: FlaskIcon,
    keywords: ['flask'],
    aliases: ['flask'],
    patterns: ['flask\\s*js'],
  },
  {
    canonical: 'PostgreSQL',
    icon: PostgreSqlIcon,
    keywords: ['postgresql', 'PostgreSQL'],
    aliases: ['postgresql', 'PostgreSQL'],
    patterns: ['postgresql\\s*js', 'postgresql\\s*\\d+'],
  },
  {
    canonical: 'Astro',
    icon: AstroIcon,
    keywords: ['astro'],
    aliases: ['astro'],
    patterns: ['astro\\s*js'],
  },
  {
    canonical: 'Vercel',
    icon: VercelIcon,
    keywords: ['vercel', 'Vercel', 'Vercel AI SDK'],
    aliases: ['vercel', 'Vercel', 'Vercel AI SDK'],
    patterns: ['vercel\\s*js'],
  },
  {
    canonical: 'Svelte',
    icon: SvelteIcon,
    keywords: ['svelte', 'Svelte', 'SvelteKit'],
    aliases: ['svelte', 'Svelte', 'SvelteKit'],
    patterns: ['svelte\\s*js'],
  },
  {
    canonical: 'Stripe',
    icon: StripeIcon,
    keywords: ['stripe', 'Stripe', 'Stripe API'],
    aliases: ['stripe', 'Stripe', 'Stripe API'],
    patterns: ['stripe\\s*js'],
  },
  {
    canonical: 'Strapi',
    icon: StrapiIcon,
    keywords: ['strapi'],
    aliases: ['strapi'],
    patterns: ['strapi\\s*js'],
  },
  {
    canonical: 'Hero UI',
    icon: HeroUIIcon,
    keywords: ['hero ui'],
    aliases: ['hero ui'],
    patterns: ['hero\\s*ui'],
  },
  {
    canonical: 'Markdown',
    icon: MarkdownIcon,
    keywords: ['markdown', 'Markdown'],
    aliases: ['markdown', 'Markdown'],
    patterns: ['markdown'],
  },
  {
    canonical: 'Drizzle ORM',
    icon: DrizzleORMIcon,
    keywords: ['drizzle', 'Drizzle', 'Drizzle ORM'],
    aliases: ['drizzle', 'Drizzle', 'Drizzle ORM'],
    patterns: ['drizzle\s*js'],
  },
  {
    canonical: 'FastAPI',
    icon: FastAPIIcon,
    keywords: ['fastapi', 'FastAPI', 'Fast API'],
    aliases: ['fastapi', 'FastAPI', 'Fast API'],
    patterns: ['fastapi\s*js'],
  },
  {
    canonical: 'Tauri',
    icon: TauriIcon,
    keywords: ['tauri', 'Tauri'],
    aliases: ['tauri', 'Tauri'],
    patterns: ['tauri\s*js'],
  },
  {
    canonical: 'CSS',
    icon: CSSICon,
    keywords: ['css'],
    aliases: ['css'],
    patterns: ['css'],
  },
  {
    canonical: 'HTML',
    icon: HTMLIcon,
    keywords: ['html', 'HTML', 'HTML5'],
    aliases: ['html', 'HTML', 'HTML5'],
    patterns: ['html'],
  },
  {
    canonical: 'Java',
    icon: JavaIcon,
    keywords: ['java', 'Java'],
    aliases: ['java', 'Java'],
    patterns: ['java'],
  },
  {
    canonical: 'Docker',
    icon: DockerIcon,
    keywords: ['docker', 'Docker'],
    aliases: ['docker', 'Docker'],
    patterns: ['docker'],
  },
  {
    canonical: 'JavaScript',
    icon: JavascriptIcon,
    keywords: ['javascript', 'js', 'Javascript', 'JavaScript'],
    aliases: ['javascript', 'js', 'Javascript', 'JavaScript'],
    patterns: ['javascript', 'js', 'Javascript', 'JavaScript'],
  },
]

/**
 * Calcula un score de similaridad entre dos strings usando algoritmo de Levenshtein
 */
function calculateSimilarityScore(str1: string, str2: string): number {
  const len1 = str1.length
  const len2 = str2.length

  if (len1 === 0) return len2
  if (len2 === 0) return len1

  const matrix = Array(len2 + 1)
    .fill(null)
    .map(() => Array(len1 + 1).fill(null))

  for (let i = 0; i <= len1; i++) matrix[0][i] = i
  for (let j = 0; j <= len2; j++) matrix[j][0] = j

  for (let j = 1; j <= len2; j++) {
    for (let i = 1; i <= len1; i++) {
      const indicator = str1[i - 1] === str2[j - 1] ? 0 : 1
      matrix[j][i] = Math.min(
        matrix[j][i - 1] + 1, // insertion
        matrix[j - 1][i] + 1, // deletion
        matrix[j - 1][i - 1] + indicator // substitution
      )
    }
  }

  const maxLen = Math.max(len1, len2)
  return maxLen === 0 ? 1 : (maxLen - matrix[len2][len1]) / maxLen
}

/**
 * Normaliza un nombre de tecnología removiendo versiones, palabras comunes, etc.
 */
function normalizeTechnologyName(name: string): string {
  return (
    name
      .toLowerCase()
      .trim()
      // Remover versiones
      .replace(/\s+(v?\d+(\.\d+)*(\.\w+)*)/gi, '')
      .replace(/\s+\d+(\.\d+)*(\.\w+)*/g, '')
      // Remover palabras comunes descriptivas
      .replace(
        /\s+(with|con|using|framework|library|runtime|server|client|app|application|router|orm|database|db|engine|tool|sdk|api|ui|css|js)/gi,
        ' '
      )
      // Limpiar espacios múltiples y caracteres especiales
      .replace(/[^\w\s.-]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
  )
}

/**
 * Encuentra la mejor coincidencia para una tecnología
 */
export function findBestTechnologyMatch(technologyName: string): {
  canonical: string
  icon: IconComponent
  score: number
} | null {
  if (!technologyName?.trim()) return null

  const normalized = normalizeTechnologyName(technologyName)
  const original = technologyName.toLowerCase().trim()

  let bestMatch: {
    config: TechnologyConfig
    score: number
  } | null = null

  for (const config of TECHNOLOGY_DATABASE) {
    let score = 0

    // 1. Coincidencia exacta con aliases (score máximo)
    for (const alias of config.aliases) {
      if (
        original === alias.toLowerCase() ||
        normalized === alias.toLowerCase()
      ) {
        score = 1.0
        break
      }
    }

    if (score < 1.0) {
      // 2. Coincidencia con patrones regex
      for (const pattern of config.patterns) {
        const regex = new RegExp(pattern, 'i')
        if (regex.test(original) || regex.test(normalized)) {
          score = Math.max(score, 0.9)
        }
      }

      // 3. Coincidencia por palabras clave
      for (const keyword of config.keywords) {
        if (
          original.includes(keyword.toLowerCase()) ||
          normalized.includes(keyword.toLowerCase())
        ) {
          score = Math.max(score, 0.8)
        }
      }

      // 4. Similaridad fuzzy con nombre canónico
      const fuzzySimilarity = calculateSimilarityScore(
        normalized,
        config.canonical.toLowerCase()
      )
      if (fuzzySimilarity > 0.6) {
        score = Math.max(score, fuzzySimilarity * 0.7)
      }

      // 5. Similaridad fuzzy con keywords
      for (const keyword of config.keywords) {
        const keywordSimilarity = calculateSimilarityScore(normalized, keyword)
        if (keywordSimilarity > 0.7) {
          score = Math.max(score, keywordSimilarity * 0.6)
        }
      }
    }

    if (score > 0.5 && (!bestMatch || score > bestMatch.score)) {
      bestMatch = { config, score }
    }
  }

  if (bestMatch) {
    return {
      canonical: bestMatch.config.canonical,
      icon: bestMatch.config.icon,
      score: bestMatch.score,
    }
  }

  // Si no encuentra coincidencia, no devolvemos ícono (se puede extender en el futuro)
  return null
}

/**
 * Función principal para obtener el ícono de una tecnología
 */
export function getTechnologyIcon(
  technologyName?: string
): IconComponent | null {
  if (!technologyName) return null

  const match = findBestTechnologyMatch(technologyName)
  return match?.icon || null
}

/**
 * Función síncrona para obtener información de matching sin cargar el ícono
 */
export function getTechnologyMatchInfo(technologyName?: string): {
  canonical: string
  score: number
  hasIcon: boolean
} | null {
  if (!technologyName) return null

  const match = findBestTechnologyMatch(technologyName)
  if (!match) return null

  return {
    canonical: match.canonical,
    score: match.score,
    hasIcon: !!match.icon,
  }
}
