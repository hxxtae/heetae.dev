import { Head2, TextBlur } from '../ui/typograpy';
import S from './page.module.css';

interface ResumeLayoutProps {
  readonly title: string;
  readonly description: string;
  readonly children: React.ReactNode;
}

export default function PageLayout({ title, description, children }: ResumeLayoutProps) {
  return (
    <div className={S.page_layout}>
      <Head2 className={S.title}>{title}</Head2>
      <TextBlur className={S.description}>{description}</TextBlur>
      {children}
    </div>
  )
}