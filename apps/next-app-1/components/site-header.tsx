import type { User } from '@supabase/supabase-js'
import Link from 'next/link'
import { AuthButton } from '@/components/auth-button'
import { Logo } from '@/components/logo'
import { HomeIcon, StickyNoteIcon } from 'lucide-react'

import { ModeToggle } from '@repo/ui/components/mode-toggle'
import { buttonVariants } from '@repo/ui/components/ui/button'
import { cn } from '@repo/ui/lib/utils'

interface SiteHeaderProps {
  user: User | null
}

export function SiteHeader({ user }: SiteHeaderProps) {
  return (
    <header className='sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container flex h-14 max-w-screen-2xl items-center'>
        <div className='flex flex-1 items-center justify-between space-x-2'>
          <div className='flex items-center gap-3 font-bold uppercase'>
            <Logo />
            Notes
          </div>
          <nav className='flex items-center gap-3'>
            <ModeToggle />

            <MenuLink href={'/'} title='Home'>
              <HomeIcon className='h-4 w-4' />
            </MenuLink>

            <MenuLink href={'/notes'} title='Notes'>
              <StickyNoteIcon className='h-4 w-4' />
            </MenuLink>

            <AuthButton user={user} />
          </nav>
        </div>
      </div>
    </header>
  )
}

interface MenuLinkProps {
  href: string
  title: string
  children: React.ReactNode
}

const MenuLink = ({ href, title, children }: MenuLinkProps) => {
  return (
    <Link
      href={href}
      className={cn(buttonVariants({ variant: 'ghost', size: 'sm' }), 'gap-1')}
    >
      {children}
      {title}
    </Link>
  )
}
