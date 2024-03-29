"use client"

import Link from 'next/link';
import S from './page.module.css';

export default function Nav() {
  return (
    <nav className={S.nav}>
      <Link href={"/about"}>About</Link>
      <Link href={"/projects"}>Projects</Link>
      <Link href={"/resume"}>Resume</Link>
    </nav>
  )
}