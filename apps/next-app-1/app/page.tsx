import { Logo } from '@/components/logo'

export default function Page() {
  return (
    <div className='mx-auto flex w-full flex-col justify-center space-y-6'>
      <div className='flex flex-col items-center space-y-6 text-center'>
        <Logo className='-mt-24 mb-12 h-24 w-24' />
        <h1 className='text-2xl font-semibold tracking-tight'>Turbo-Supa</h1>
        <p className='text-sm text-muted-foreground'>
          Demo monorepo using Turborepo and shared Supabase auth for multiple
          Next.js apps.
        </p>
        <p className='text-sm text-muted-foreground'>
          Users can see their notes after signed in.
        </p>
      </div>
    </div>
  )
}
