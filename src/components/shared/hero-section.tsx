'use client'
import { motion } from 'motion/react'
import { HeroHighlight, Highlight } from '../ui/hero-highlight'

export function HeroSection() {
  return (
    <HeroHighlight containerClassName='h-[28rem] md:h-[32rem] lg:h-[36rem]'>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className='text-2xl px-4 md:text-4xl lg:text-6xl font-serif font-black text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto '
      >
        Te proveemos de nuevas ideas para que crees tus propios proyectos.{' '}
        <Highlight className='text-black dark:text-white'>
          Crea y comparte.
        </Highlight>
      </motion.h1>
    </HeroHighlight>
  )
}
