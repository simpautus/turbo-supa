import { cookies } from 'next/headers'
import { StickyNoteIcon } from 'lucide-react'

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from '@repo/ui/components/ui/alert'
import { createClient } from '@repo/utils/supabase/server'

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
        <div className='grid gap-2'>
          {notes?.map((note) => (
            <Alert key={note.id}>
              <StickyNoteIcon className='h-4 w-4' />
              <AlertTitle>Note</AlertTitle>
              <AlertDescription>{note.title}</AlertDescription>
            </Alert>
          ))}
        </div>
      </div>
    </div>
  )
}
