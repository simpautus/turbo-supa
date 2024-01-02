import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import '@repo/ui/styles/globals.css'

import { ThemeProvider } from '@repo/ui/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next App 1 | Turbo & Supabase',
  description: 'Turbo & Supabase Next.js app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          disableTransitionOnChange
          enableSystem
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
