import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import '@repo/ui/styles/globals.css'

import type { User } from '@supabase/supabase-js'
import { cookies } from 'next/headers'
import { SiteHeader } from '@/components/site-header'
import { UserDisplay } from '@/components/user-display'

import { ThemeProvider } from '@repo/ui/components/theme-provider'
import { cn } from '@repo/ui/lib/utils'
import { createClient } from '@repo/utils/supabase/server'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next App 1 | Turbo & Supabase',
  description: 'Turbo & Supabase Next.js app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <html lang='en'>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          inter.className
        )}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <div className='relative flex min-h-screen flex-col'>
            <SiteHeader user={user} />
            <main className='relative flex min-h-full flex-1 flex-col justify-center'>
              <DisplayUserEmail user={user} />
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

function DisplayUserEmail({ user }: { user: User | null }) {
  if (!user) return null
  return <UserDisplay emailOrId={user?.email ?? user.id} />
}
