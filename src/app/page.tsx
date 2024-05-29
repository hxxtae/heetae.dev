import Image from 'next/image';
import S from "./page.module.css";
import { Metadata } from 'next';
import metadata from '@/utils/metadata';

export default function Home() {
  return (
    <section className={S.section}>
      <Image className={S.home_logo} alt="h logo" src="/H_1.png" width={400} height={400} />
    </section>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return metadata({
    title: "Heetae | Frontend Engineer",
    description: "김희태의 포트폴리오 웹 사이트",
    path: `/`,
  });
}