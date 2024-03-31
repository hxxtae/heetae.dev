interface ProjectsLayoutProps {
  readonly children: React.ReactNode;
}

export default function ProjectsLayout({ children }: ProjectsLayoutProps) {
  return (
    <div>
      {children}
    </div>
  )
}