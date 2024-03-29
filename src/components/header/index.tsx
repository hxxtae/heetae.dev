"use client"

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import S from './page.module.css';
import Nav from '../nav';
import { useEffect, useState } from 'react';

export default function Header() {
  return (
    <section className={S.header}>
      <Nav/>
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
    <button className={S.theme_button} type="button" onClick={toggleTheme}>
      {mounted && theme === "dark" ?
          <Moon /> :
          <Sun />
      }
    </button>
  );
}