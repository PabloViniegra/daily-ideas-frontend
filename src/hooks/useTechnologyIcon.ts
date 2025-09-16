'use client'

import { useState, useEffect } from 'react'
import {
  getTechnologyIcon,
  getTechnologyMatchInfo,
} from '@/lib/technology-matcher'
import type { IconComponent } from '@/lib/utils'

interface TechnologyIconState {
  icon: IconComponent | null
  canonical: string
  score: number
  isLoading: boolean
  hasIcon: boolean
}

/**
 * Hook para obtener el ícono de una tecnología usando el nuevo sistema inteligente
 */
export function useTechnologyIcon(
  technologyName?: string
): TechnologyIconState {
  const [state, setState] = useState<TechnologyIconState>({
    icon: null,
    canonical: technologyName || '',
    score: 0,
    isLoading: false,
    hasIcon: false,
  })

  useEffect(() => {
    if (!technologyName) {
      setState({
        icon: null,
        canonical: '',
        score: 0,
        isLoading: false,
        hasIcon: false,
      })
      return
    }

    // Obtener información de matching e ícono de forma síncrona
    const matchInfo = getTechnologyMatchInfo(technologyName)
    const icon = getTechnologyIcon(technologyName)

    setState({
      icon,
      canonical: matchInfo?.canonical || technologyName,
      score: matchInfo?.score || 0,
      isLoading: false,
      hasIcon: !!icon,
    })
  }, [technologyName])

  return state
}

/**
 * Hook más simple que solo devuelve el ícono una vez cargado
 */
export function useTechnologyIconSimple(
  technologyName?: string
): IconComponent | null {
  const { icon, isLoading } = useTechnologyIcon(technologyName)
  return isLoading ? null : icon
}

/**
 * Función para obtener múltiples íconos de tecnologías de forma optimizada
 */
export function useTechnologyIcons(technologyNames: string[] = []) {
  const [icons, setIcons] = useState<Map<string, IconComponent | null>>(
    new Map()
  )
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (technologyNames.length === 0) {
      setIcons(new Map())
      return
    }

    setIsLoading(true)

    const newIcons = new Map(
      technologyNames.map(name => [name, getTechnologyIcon(name)] as const)
    )

    setIcons(newIcons)
    setIsLoading(false)
  }, [technologyNames])

  return { icons, isLoading }
}
