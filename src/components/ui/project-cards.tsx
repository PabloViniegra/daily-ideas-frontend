'use client'

import ScrollStack, { ScrollStackItem } from '@/components/ui/scroll-stack'
import type { Project, Technology } from '@/types'
import RegenerateMenu from '@/components/shared/regenerate-menu'
import { CopyButton } from '@/components/animate-ui/components/buttons/copy'
import { useTechnologyIcon } from '@/hooks/useTechnologyIcon'

type ProjectCardsProps = {
  projects: Project[]
}

export default function ProjectCards({ projects }: ProjectCardsProps) {
  if (!projects?.length) return null

  return (
    <section className='relative py-4 sm:py-6 md:py-8 lg:py-10 px-4 sm:px-6 lg:px-8'>
      <div className='flex flex-row gap-x-2 w-full justify-center items-center mb-4 sm:mb-6'>
        <RegenerateMenu />
      </div>
      <ScrollStack className='max-h-[70vh] sm:max-h-[75vh] md:max-h-[80vh]'>
        {projects.map((project, i) => (
          <ScrollStackItem
            key={`${project.generated_at}-${project.title}-${i}`}
            itemClassName='bg-background text-foreground ring-1 ring-border'
          >
            <article className='h-full flex flex-col gap-2 sm:gap-3 p-0'>
              <CopyButton
                content={`${project.title}\n\n${project.description}`}
                className='absolute top-2 right-2 sm:top-3 sm:right-3 bg-foreground text-background size-6 sm:size-7 md:size-8'
              />
              <header className='flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 pr-8 sm:pr-10'>
                <h3 className='text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight font-serif leading-tight'>
                  {project.title}
                </h3>
                <span className='self-start sm:self-auto shrink-0 rounded-full bg-secondary px-2 sm:px-3 py-1 text-xs sm:text-xs font-medium text-secondary-foreground font-mono'>
                  {project.category}
                </span>
              </header>
              <p className='text-sm sm:text-base md:text-base text-muted-foreground font-sans leading-relaxed'>
                {project.description}
              </p>
              <div className='mt-auto flex flex-col xs:flex-row xs:flex-wrap items-start xs:items-center gap-2 pt-3'>
                <span className='inline-flex items-center rounded-md border px-2 sm:px-3 py-1 text-xs sm:text-xs font-medium font-mono'>
                  Dificultad: {project.difficulty}
                </span>
                <span className='inline-flex items-center rounded-md border px-2 sm:px-3 py-1 text-xs sm:text-xs font-medium font-mono'>
                  Tiempo estimado: {project.estimated_time}
                </span>
              </div>
              {project.technologies?.length ? (
                <ul className='mt-3 flex flex-wrap gap-1.5 sm:gap-2'>
                  {project.technologies.map((t, j) => (
                    <TechnologyTag
                      key={`${project.id}-${t.name}-${j}`}
                      technology={t}
                    />
                  ))}
                </ul>
              ) : null}
            </article>
          </ScrollStackItem>
        ))}
      </ScrollStack>
    </section>
  )
}

// Componente separado para manejar cada tecnología individual
type TechnologyTagProps = {
  technology: Technology
}

function TechnologyTag({ technology }: TechnologyTagProps) {
  const { icon: Icon, canonical, score } = useTechnologyIcon(technology.name)

  return (
    <li
      className='inline-flex items-center gap-1 rounded-md bg-muted px-2 sm:px-2.5 py-1 text-xs sm:text-xs text-muted-foreground font-serif'
      title={`${technology.reason}${score < 0.8 && score > 0 ? ` (${Math.round(score * 100)}% match with ${canonical})` : ''}`}
    >
      {Icon ? (
        <Icon className='h-3 w-3 sm:h-3.5 sm:w-3.5 flex-shrink-0' />
      ) : null}
      <span className='truncate max-w-[120px] sm:max-w-none'>
        {canonical || technology.name}
      </span>
      {score < 0.8 && score > 0.3 && (
        <span
          className='opacity-60 text-[10px] sm:text-[10px] flex-shrink-0'
          title='Fuzzy match'
        >
          ~
        </span>
      )}
    </li>
  )
}
