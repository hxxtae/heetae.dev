"use client"

import { usePathname } from 'next/navigation';
import { ChevronRight, X } from 'lucide-react';
import { createPortal } from 'react-dom';
import { useState } from 'react';
import classNames from 'classnames';
import Link from 'next/link';

import { useMediaQuery } from '@/app/hooks/useMediaQuery';
import { BasicButton } from '../ui/basicButton';
import S from './page.module.css';

export default function Nav() {
  const [sideState, setSideState] = useState(false);
  const matche = useMediaQuery({ query: '(max-width: 640px)' });

  const onClickChevronBtn = () => {
    setSideState((prev) => !prev)
  }

  return (
    <nav className={S.nav}>
      {
        !matche ?
          <Links /> :
          <BasicButton width='32px' height='32px' onclick={onClickChevronBtn}>
            <ChevronRight />
          </BasicButton>
      }
      {sideState && createPortal(<SideNav onClose={onClickChevronBtn} />, document.body)}
    </nav>
  )
}

interface SideNavProps {
  onClose: () => void
}

function SideNav({ onClose }: SideNavProps) {
  return (
    <>
      <aside className={S.side_nav}>
        <button className={S.close} type='button' onClick={onClose}>
          <X className={S.close_icon} />
        </button>
        <Links onClose={onClose} />
      </aside>
      <div className={S.overlay} onClick={onClose} />
    </>
  )
}

interface LinksProps {
  onClose?: () => void
}

function Links({ onClose }: LinksProps) {
  const pathname = usePathname();

  const navClass = (path: string) =>
    classNames({
      [S.nav_link]: true,
      [S.active]: pathname?.startsWith(path) ? true : false
    });
  
  return (
    <>
      <Link className={navClass('/about')} href={"/about"} onClick={onClose}>About</Link>
      <Link className={navClass('/projects')} href={"/projects"} onClick={onClose}>Projects</Link>
      <Link className={navClass('/resume')} href={"/resume"} onClick={onClose}>Resume</Link>
    </>
  )
}