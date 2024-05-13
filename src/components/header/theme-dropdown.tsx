import { useStore } from '@nanostores/react';
import { useEffect } from 'react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { THEME_MAP, type ThemeKey, themeStore } from '@/stores/theme';

import { Button } from '../ui/button';
import { DotIcon, MoonIcon, SunIcon } from '../ui/icons';
import { scrollActive } from './header';

export default function ThemeDropdown() {
  const theme = useStore(themeStore);

  useEffect(() => {
    addEventListener('scroll', scrollActive);

    return () => {
      removeEventListener('scroll', scrollActive);
    };
  });

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="change-theme"
          id="theme-button"
        >
          <SunIcon className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {Object.keys(THEME_MAP).map((key) => {
          const themeKey = key as ThemeKey;
          return (
            <DropdownMenuItem
              key={key}
              className="justify-between capitalize"
              onClick={() => themeStore.set(THEME_MAP[themeKey])}
            >
              {themeKey}
              {theme === THEME_MAP[themeKey] && <DotIcon />}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
