import { GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
import { TextBlur } from '../ui/typograpy';
import Link from 'next/link';
import S from './page.module.css';

const Footer = () => {
  return (
    <footer className={S.footer}>
      <div className={S.links}>
        <Link href={"https://github.com/hxxtae/heetae.dev"} target="_blank">
          <GithubIcon width={20} height={20} />
        </Link>
        <Link href={"https://www.linkedin.com/in/kimheetae/"} target="_blank">
          <LinkedinIcon width={20} height={20} />
        </Link>
      </div>
      <TextBlur className={S.license}>Copyright © 2024 HeetaeKim</TextBlur>
    </footer>
  )
}

export default Footer;