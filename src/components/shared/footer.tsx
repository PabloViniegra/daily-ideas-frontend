export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className='mt-16 border-t bg-background/50 backdrop-blur supports-[backdrop-filter]:bg-background/60 font-sans tracking-tight leading-6'>
      <div className='mx-auto max-w-6xl px-4 py-6 text-sm text-muted-foreground flex flex-col sm:flex-row items-center justify-between gap-2'>
        <p className='text-center sm:text-left'>
          © {year} Daily Ideas. Todos los derechos reservados.
        </p>
        <nav className='flex items-center gap-4'>
          <a
            href='#'
            className='transition-colors text-muted-foreground hover:text-foreground underline decoration-primary/30 underline-offset-4 hover:decoration-primary rounded-sm px-1 -mx-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'
          >
            Términos
          </a>
          <a
            href='#'
            className='transition-colors text-muted-foreground hover:text-foreground underline decoration-primary/30 underline-offset-4 hover:decoration-primary rounded-sm px-1 -mx-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'
          >
            Privacidad
          </a>
        </nav>
      </div>
    </footer>
  )
}
