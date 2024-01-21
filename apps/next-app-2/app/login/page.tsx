import { cookies, headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { AlertCircle } from 'lucide-react'

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from '@repo/ui/components/ui/alert'
import { Button } from '@repo/ui/components/ui/button'
import { Input } from '@repo/ui/components/ui/input'
import { Label } from '@repo/ui/components/ui/label'
import { cn } from '@repo/ui/lib/utils'
import { createClient } from '@repo/utils/supabase/server'

export default function Login({
  searchParams,
}: {
  searchParams: { message: string }
}) {
  const signIn = async (formData: FormData) => {
    'use server'

    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      return redirect('/login?message=Could not authenticate user')
    }

    return redirect('/notes')
  }

  const signUp = async (formData: FormData) => {
    'use server'

    const origin = headers().get('origin')
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${origin}/auth/callback`,
      },
    })

    if (error) {
      return redirect('/login?message=Could not authenticate user')
    }

    return redirect('/login?message=Check email to continue sign in process')
  }

  return (
    <div className='mx-auto flex w-full flex-col justify-center space-y-6'>
      <div className='flex flex-col space-y-2 text-center'>
        <h1 className='text-2xl font-semibold tracking-tight'>
          Sign In / Sign Up
        </h1>
        <p className='text-sm text-muted-foreground'>
          Sign in or sign up to view your notes
        </p>
      </div>

      <div className='mx-auto flex w-full flex-1 flex-col justify-center gap-2 px-8 sm:max-w-md'>
        <div className={cn('grid gap-6')}>
          <form action={signIn}>
            <div className='grid gap-2'>
              <div className='grid gap-1'>
                <Label className='sr-only' htmlFor='email'>
                  Email
                </Label>
                <Input
                  id='email'
                  name='email'
                  placeholder='name@example.com'
                  type='email'
                  autoCapitalize='none'
                  autoComplete='email'
                  autoCorrect='off'
                  required
                  defaultValue='test2@example.com'
                />
              </div>
              <div className='grid gap-1'>
                <Label className='sr-only' htmlFor='password'>
                  Password
                </Label>
                <Input
                  id='email'
                  name='password'
                  type='password'
                  placeholder='********'
                  required
                  defaultValue='testingpassword'
                />
              </div>
              <Button>Sign In</Button>
              <Button variant={'secondary'} formAction={signUp}>
                Sign Up
              </Button>
              {searchParams?.message && (
                <Alert variant='destructive'>
                  <AlertCircle className='h-4 w-4' />
                  <AlertTitle>Info</AlertTitle>
                  <AlertDescription>{searchParams.message}</AlertDescription>
                </Alert>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
