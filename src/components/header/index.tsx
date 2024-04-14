"use client"

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { BasicButton } from '../ui/basicButton';
import S from './page.module.css';
import Nav from '../nav';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <section className={S.header}>
      <Nav />
      <MainLogo />
      <ThemeChanger />
    </section>
  )
}

function ThemeChanger() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <BasicButton width='32px' height='32px' onclick={toggleTheme}>
      {
        mounted && theme === "dark" ?
        <Moon /> : <Sun />
      }
    </BasicButton>
  );
}

function MainLogo() {
  return (
    <Link href={"/"}>
      <Image className={S.h_logo} src="/H_2.png" alt="logo h" width={32} height={32} />
    </Link>
  )
}