interface AboutLayoutProps {
  readonly children: React.ReactNode;
}

export default function AboutLayout({ children }: AboutLayoutProps) {
  return (
    <div>
      {children}
    </div>
  )
}