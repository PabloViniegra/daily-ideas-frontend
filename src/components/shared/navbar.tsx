import Image from 'next/image'
import Link from 'next/link'
import { ThemeSwitcher } from '../ui/kibo-ui/theme-switcher'
import GitHubButton from './github-button'

export default function Navbar() {
  return (
    <nav className='mt-2 w-full flex flex-row justify-between items-center'>
      <h1 className='group ml-3 text-lg font-bold font-serif tracking-tight transition-colors duration-200 hover:text-primary flex flex-row items-center gap-x-2'>
        <Image
          src='/images/logo-removebg-preview.png'
          alt='Daily Ideas logo'
          width={56}
          height={56}
          className='rounded-md shadow-sm transition-transform duration-200 group-hover:scale-105 group-hover:shadow-md object-contain shrink-0'
          priority
        />
        <Link
          href='/'
          aria-label='Ir al inicio'
          className='flex flex-row items-center gap-x-2'
        >
          <span className='relative inline-block leading-none'>
            Daily Ideas
            <span className='pointer-events-none absolute left-0 bottom-0 h-0.5 bg-primary w-0 transition-all duration-300 group-hover:w-full' />
          </span>
        </Link>
      </h1>
      <section className='w-20 gap-x-4 flex flex-row justify-end items-center'>
        <GitHubButton />
        <ThemeSwitcher />
      </section>
    </nav>
  )
}
