import Image from 'next/image';
import S from "./page.module.css";

export default function Home() {
  return (
    <section className={S.section}>
      <Image className={S.home_logo} alt="h logo" src="/H_1.png" width={400} height={400} />
    </section>
  );
}
