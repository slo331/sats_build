'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Switch } from '@radix-ui/themes'

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  useEffect(() => setMounted(true), []);

  if (!mounted) return <>...</>;

  if (currentTheme === 'dark') {

    return (
      <Switch color='indigo' variant='soft' defaultChecked onClick={() => setTheme('light')} />
    )
  }

  if (currentTheme === 'light') {
    return (
      <Switch color='indigo' variant='soft' onClick={() => setTheme('dark')} />
    );
  }

  // return (
  //   <Switch color='indigo' variant='soft' />
  // )
}

export default ThemeSwitch