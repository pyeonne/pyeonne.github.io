import { LayoutGrid } from 'lucide-react';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

import NavLink from './nav-link';

export default function MenuSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="nav__toggle" id="nav-toggle">
          <LayoutGrid className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </div>
      </SheetTrigger>

      <SheetContent side="top" id="nav-menu">
        <span className="nav__title">Menu</span>
        <h3 className="nav__name">Hana</h3>
        <ul className="nav__list text-lg font-medium">
          <NavLink href="#home" title="Home" className="active-link" />
          <NavLink href="#about" title="About Me" />
          <NavLink href="#projects" title="Projects" />
          <NavLink href="#contact" title="Contact Me" />
          <NavLink href="/blog" title="Blog" />
        </ul>
      </SheetContent>
    </Sheet>
  );
}
