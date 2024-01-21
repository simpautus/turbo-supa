import { cookies } from 'next/headers'

import { createClient } from '@repo/utils/supabase/server'

import { Note } from './_components/note'

// Opt out of caching for all data requests in the route segment
export const dynamic = 'force-dynamic'

export default async function Page() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)
  const { data: notes } = await supabase.from('notes').select()

  return (
    <div className='mx-auto flex w-full flex-col justify-center space-y-6'>
      <div className='flex flex-col items-center space-y-6'>
        <h1 className='text-2xl font-semibold tracking-tight'>Notes</h1>
        <p className='text-sm text-muted-foreground'>
          Your notes from the Supabase.
        </p>
        <div className='grid w-full max-w-md gap-3'>
          {notes?.map(({ id, title, content }) => (
            <Note key={id} title={title} content={content} />
          ))}
        </div>
      </div>
    </div>
  )
}
