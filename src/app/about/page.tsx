import about from './data/about';
import Image from 'next/image';
import S from './page.module.css';
import { Text, TextBlur } from '@/components/ui/typograpy';
import { Metadata } from 'next';
import metadata from '@/utils/metadata';

export default function About() {
  return (
    <section className={S.about}>
      <div className={S.wrapper}>
        <Image alt="프로필이미지" src="/assets/data/about/heetae.jpg" width={300} height={300} />
        <div className={S.content_box}>
          {about.content.map((content, idx) => (
            <Text
              key={idx}
              className={S.content_text}
              style={{ fontWeight: idx === 0 ? "500" : "400" }}
            >
              {content}
            </Text>
          ))}
          
          <div>
            <TextBlur className={S.skill_title}>Client-Side</TextBlur>
            {about.skills.clientSide.map((skill, idx) => (
              <TextBlur key={idx} className={S.skill}>#{skill}</TextBlur>
            ))}
          </div>
          <div>
            <TextBlur className={S.skill_title}>Server-Side</TextBlur>
            {about.skills.serverSide.map((skill, idx) => (
              <TextBlur key={idx} className={S.skill}>#{skill}</TextBlur>
            ))}
          </div>
          <div>
            <TextBlur className={S.skill_title}>Others</TextBlur>
            {about.skills.others.map((skill, idx) => (
              <TextBlur key={idx} className={S.skill}>#{skill}</TextBlur>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export async function generateMetadata(): Promise<Metadata> {
  return metadata({
    title: "Heetae | Frontend Engineer",
    description: "김희태의 포트폴리오 웹 사이트",
    path: `/about`,
  });
}