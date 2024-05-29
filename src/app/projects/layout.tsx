import PageLayout from '@/components/pageLayout';

interface ProjectsLayoutProps {
  readonly children: React.ReactNode;
}

export default function ProjectsLayout({ children }: ProjectsLayoutProps) {
  return (
    <PageLayout title="프로젝트" description="모든 활동들을 기록합니다.">
      {children}
    </PageLayout>
  )
}