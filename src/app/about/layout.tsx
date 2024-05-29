import PageLayout from '@/components/pageLayout';

interface AboutLayoutProps {
  readonly children: React.ReactNode;
}

export default function AboutLayout({ children }: AboutLayoutProps) {
  return (
    <PageLayout title='heetae' description='저는 이렇게 생각하고 행동하는 개발자입니다.'>
      {children}
    </PageLayout>
  )
}