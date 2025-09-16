import ProjectsCards from '@/components/server/rsc-projects-cards'
import { HeroSection } from '@/components/shared/hero-section'
import { Suspense } from 'react'
import { Loader } from '@/components/ai-elements/loader'
import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Inicio',
  description:
    'Explora ideas diarias para crear nuevos proyectos. Tecnologías recomendadas, ejemplos y recursos para inspirarte y construir.',
  alternates: { canonical: '/' },
  openGraph: {
    url: '/',
    title: 'Daily Ideas — Inicio',
    description:
      'Explora ideas diarias para crear nuevos proyectos. Tecnologías recomendadas, ejemplos y recursos para inspirarte y construir.',
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'Daily Ideas',
      },
    ],
  },
}

export default function Home() {
  return (
    <main>
      <Script
        id='ld-json-home'
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'Daily Ideas',
            url:
              (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000') +
              '/',
            description:
              'Descubre ideas diarias para impulsar tus proyectos con inspiración, tecnologías y ejemplos prácticos.',
            inLanguage: 'es-ES',
            potentialAction: {
              '@type': 'SearchAction',
              target: {
                '@type': 'EntryPoint',
                urlTemplate:
                  (process.env.NEXT_PUBLIC_SITE_URL ||
                    'http://localhost:3000') + '/?q={search_term_string}',
              },
              'query-input': 'required name=search_term_string',
            },
          }),
        }}
      />
      <HeroSection />
      <Suspense
        fallback={
          <section className='w-full min-h-[70vh] md:min-h-[80vh] grid place-items-center py-16'>
            <div className='flex flex-col items-center gap-4 scale-125 md:scale-150'>
              <Loader />
              <p className='text-sm md:text-base text-muted-foreground font-serif tracking-tight'>
                Cargando proyectos…
              </p>
            </div>
          </section>
        }
      >
        <ProjectsCards />
      </Suspense>
    </main>
  )
}
