function InlineCode({ text }: { text: string }) {
  return (
    <p className='relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold'>
      {text}
    </p>
  )
}

export function UserDisplay({ emailOrId }: { emailOrId: string }) {
  return (
    <div className='absolute right-2 top-2'>
      <InlineCode text={emailOrId} />
    </div>
  )
}
