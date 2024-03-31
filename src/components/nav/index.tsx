"use client"

import Link from 'next/link';
import S from './page.module.css';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';

export default function Nav() {
  const pathname = usePathname();
  console.log(pathname?.startsWith("/about"))

  const navClass = (path: string) =>
    classNames({
      [S.nav_link]: true,
      [S.active]: pathname?.startsWith(path) ? true : false
    });

  return (
    <nav className={S.nav}>
      <Link className={navClass('/about')} href={"/about"}>About</Link>
      <Link className={navClass('/projects')} href={"/projects"}>Projects</Link>
      <Link className={navClass('/resume')} href={"/resume"}>Resume</Link>
    </nav>
  )
}
