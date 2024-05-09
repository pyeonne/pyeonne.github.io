import { useEffect } from 'react';

import { SheetTrigger } from '@/components/ui/sheet';

import { scrollActive } from './header';

interface Props {
  href?: string;
  title: string;
}

export default function NavLink({ href = '#', title }: Props) {
  useEffect(() => {
    addEventListener('scroll', scrollActive);

    return () => {
      removeEventListener('scroll', scrollActive);
    };
  });

  return (
    <SheetTrigger className="focus:outline-none">
      <li className="nav__item">
        <a href={href} className="nav__link">
          {title}
        </a>
      </li>
    </SheetTrigger>
  );
}
