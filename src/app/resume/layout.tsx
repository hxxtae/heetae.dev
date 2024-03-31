interface ResumeLayoutProps {
  readonly children: React.ReactNode;
}

export default function ResumeLayout({ children }: ResumeLayoutProps) {
  return (
    <div>
      {children}
    </div>
  )
}