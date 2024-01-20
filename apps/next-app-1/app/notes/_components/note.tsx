import { StickyNoteIcon } from 'lucide-react'

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from '@repo/ui/components/ui/alert'

interface NoteProps {
  title: string
  content: string | null
}

export const Note = ({ title, content }: NoteProps) => (
  <Alert className='hover:bg-accent'>
    <StickyNoteIcon className='h-4 w-4' />
    <AlertTitle>{title}</AlertTitle>
    {content ? (
      <AlertDescription className='mt-3 text-muted-foreground'>
        {content}
      </AlertDescription>
    ) : null}
  </Alert>
)
