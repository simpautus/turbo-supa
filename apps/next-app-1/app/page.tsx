import { cookies } from 'next/headers'

import { ModeToggle } from '@repo/ui/components/mode-toggle'
import { Button } from '@repo/ui/components/ui/button'
import { createClient } from '@repo/utils/supabase/server'

export const dynamic = 'force-dynamic'

export default async function Page() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const { data: notes, error } = await supabase.from('notes').select('*')

  if (error) {
    return <pre>{JSON.stringify(error, null, 2)}</pre>
  }

  return (
    <div className='my-24 flex flex-col items-center gap-y-12'>
      <h1 className='text-3xl font-semibold tracking-tight'>Next App 1</h1>
      <Button className='mx-auto' size='sm'>
        Button
      </Button>
      <ModeToggle />
      <pre>{JSON.stringify(notes, null, 2)}</pre>
    </div>
  )
}
