import Image from 'next/image'
import supaPic from '@/assets/supabase.png'

import { cn } from '@repo/ui/lib/utils'

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn('relative h-6 w-6', className)}>
      <Image src={supaPic} alt='Supabase logo' fill />
    </div>
  )
}
