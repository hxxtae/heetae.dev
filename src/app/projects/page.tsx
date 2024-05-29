import { GithubIcon, LinkIcon } from 'lucide-react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { Head6, TextBlur } from '@/components/ui/typograpy';
import projects from './data/projects';
import metadata from '@/utils/metadata';
import S from './page.module.css';


export default function Projects() {
  return (
    <section className={S.projects}>
      <ul className={S.boxes}>
        {projects.contents.map((content, idx) => (
          <li key={idx} className={S.box}>
            <div className={S.wrapper}>
              <div className={S.title_wrapper}>
                <Head6 className={S.title}>{content.title}</Head6>
                {content.github_url &&
                  <Link href={content.github_url} target="_blank">
                    <GithubIcon className={S.github_icon} width={13} height={13} />
                  </Link>}
                {content.home_url &&
                  <Link href={content.home_url} target="_blank">
                    <LinkIcon className={S.home_icon} width={13} height={13} />
                  </Link>}
              </div>
              <TextBlur>{content.description}</TextBlur>
            </div>
            <div className={S.image_wrapper}>
              <Image className={S.image} alt={content.title} src={content.imagePath} width={200} height={100} />
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export async function generateMetadata(): Promise<Metadata> {
  return metadata({
    title: "프로젝트",
    description: "프론트엔드 개발자 프로젝트",
    path: `/projects`,
  });
}