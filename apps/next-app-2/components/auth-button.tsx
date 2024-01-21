import type { User } from '@supabase/supabase-js'
import { cookies } from 'next/headers'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { LockIcon } from 'lucide-react'

import { Button } from '@repo/ui/components/ui/button'
import { createClient } from '@repo/utils/supabase/server'

interface AuthButtonProps {
  user: User | null
}

export function AuthButton({ user }: AuthButtonProps) {
  const signOut = async () => {
    'use server'

    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    await supabase.auth.signOut()
    return redirect('/')
  }

  return user ? (
    <form action={signOut}>
      <Button className='gap-1' size={'sm'}>
        <LockIcon className='h-4 w-4' />
        Logout
      </Button>
    </form>
  ) : (
    <Button asChild size={'sm'}>
      <Link href='/login' className='gap-1'>
        <LockIcon className='h-4 w-4' />
        Login
      </Link>
    </Button>
  )
}
