import { LinkIcon } from 'lucide-react';
import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

import { Head1, Head4, Head5, Head6, InfoMin, Text, TextBlur } from '@/components/ui/typograpy';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import metadata from '@/utils/metadata';
import resume from './data/resume';
import S from './page.module.css';

export default function Resume() {
  return (
    <section className={S.resume}>
      <Head1 className={S.name}>{resume.name}</Head1>
      <Head5 className={S.job}>{resume.job}</Head5>
      <Link href={`mailto:${resume.contact}`}>
        <Text>{resume.contact}</Text>
      </Link>
      <div className={S.about}>
        {resume.about.map((item, index) => (
          <TextBlur key={index}>{item}</TextBlur>
        ))}
      </div>

      {/* Experience */}
      <div className={S.experience}>
        <Head4 className={S.head}>👨🏻‍💻 Experience</Head4>
        {resume.experience.map((item, index) => (
          <Card key={index}>
            <CardHeader>
              <Head4 className={S.experience_title}>{item.experienceTitle}</Head4>
              <TextBlur className={S.position}>
                {item.position}&nbsp;&nbsp;|&nbsp;&nbsp;{item.period}
              </TextBlur>
            </CardHeader>

            <CardContent>
              {item.content.map((content) => (
                <div key={content.title}>
                  <Head5 className={S.title}>
                    {content.title}
                    {content.link &&
                      <Link href={content.link} target='_blank'>
                        <LinkIcon width={12} height={12} className={S.link} />
                      </Link>
                    }
                  </Head5>
                  <InfoMin className={S.description}>{content.description}</InfoMin>

                  <div className={S.do_list}>
                    {content.doList.map((doItem, doIndex) => (
                      <>
                        <Text key={doIndex} className={S.do}>{doItem.do}</Text>
                        {doItem.content.map((content, contentIdx) => (
                          <Text key={contentIdx} className={S.do_content}>· {content}</Text>
                        ))}
                      </>
                    ))}
                  </div>
                  <div className={S.tech_list}>
                  {content.tech.map((name, techIdx) => (
                    <TextBlur
                      key={techIdx}
                      className={S.tech}
                      style={{fontWeight: `${name === content.techHighlight[techIdx] ? "400" : "300"}`}}
                    >
                      {name}
                    </TextBlur>
                  ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Other Experience */}
      <div className={S.other_experience}>
        <Head4 className={S.head}>🙆🏻‍♂️ Other Experience</Head4>
        {resume.otherExperience?.map((item, index) => (
          <React.Fragment key={index}>
            <Head6 className={S.name}>{item.name}</Head6>
            <div className={S.list}>
              {item.content.map((content, contentIdx) => (
                content.url ? 
                  <Link key={contentIdx} href={content.url ?? ""} target="_blank">
                    <Text key={contentIdx} className={S.title_link}>· {content.title}</Text>
                  </Link> :
                  <Text key={contentIdx} className={S.title}>· {content.title}</Text>
              ))}
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}

export async function generateMetadata(): Promise<Metadata> {
  return metadata({
    title: "김희태 이력서",
    description: "프론트엔드 개발자 이력서",
    path: `/resume`,
  });
}