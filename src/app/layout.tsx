import type { Metadata } from 'next'
import { Varela_Round, Roboto, Google_Sans_Code } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ui/theme-provider'
import Footer from '@/components/shared/footer'
import Navbar from '@/components/shared/navbar'

const varelaRound = Varela_Round({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  variable: '--font-serif',
})

const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
})

const googleSansCode = Google_Sans_Code({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
})

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  ),
  title: {
    default: 'Daily Ideas — Ideas diarias para tus proyectos',
    template: '%s | Daily Ideas',
  },
  description:
    'Descubre ideas diarias para impulsar tus proyectos. Inspiración, tecnologías y ejemplos prácticos para construir más y mejor.',
  keywords: [
    'ideas diarias',
    'proyectos',
    'inspiración',
    'tecnología',
    'desarrollo web',
    'side projects',
  ],
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: '/',
    siteName: 'Daily Ideas',
    title: 'Daily Ideas — Ideas diarias para tus proyectos',
    description:
      'Descubre ideas diarias para impulsar tus proyectos. Inspiración, tecnologías y ejemplos prácticos para construir más y mejor.',
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'Daily Ideas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Daily Ideas — Ideas diarias para tus proyectos',
    description:
      'Descubre ideas diarias para impulsar tus proyectos. Inspiración, tecnologías y ejemplos prácticos para construir más y mejor.',
    images: ['/images/logo.png'],
    creator: '@dailyideas',
  },
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='es' suppressHydrationWarning>
      <body
        className={`${varelaRound.variable} ${roboto.variable} ${googleSansCode.variable} antialiased`}
      >
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
