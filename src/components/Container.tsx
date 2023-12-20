import clsx from 'clsx'

export function Container({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={clsx(className, 'mx-auto px-3 2xl:max-w-screen-2xl')}>
      {children}
    </div>
  )
}
