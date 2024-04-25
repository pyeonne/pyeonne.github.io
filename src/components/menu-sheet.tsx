import {
  ArrowUpRight,
  AtSign,
  Github,
  LayoutGrid,
  Linkedin,
  Menu,
  MoveUpRight,
  Package2,
  Twitter,
} from 'lucide-react';
import * as SheetPrimitive from '@radix-ui/react-dialog';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import NavLink from './nav-link';
import NavSocialLink from './nav-social-link';

export default function MenuSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="nav__toggle shrink-0 md:hidden"
          id="nav-toggle"
        >
          <LayoutGrid />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="nav__menu border-r-first-dark bg-first-dark flex flex-col justify-between px-14 pb-[4.5rem] pt-24 md:hidden"
        id="nav-menu"
      >
        <ul className="nav__list flex flex-col gap-y-12 text-lg font-medium">
          <NavLink href="#home" title="Home" />
          <NavLink href="#work" title="Work" />
          <NavLink href="#about" title="About" />
          <NavLink href="#contact" title="Contact" />
          <NavLink href="/blog" title="Blog" />
        </ul>

        <div className="nav__social flex gap-x-2">
          <NavSocialLink href="#" icon={<AtSign />} />
          <NavSocialLink href="#" icon={<Github />} />
          <NavSocialLink href="#" icon={<Twitter />} />
          <NavSocialLink href="#" icon={<Linkedin />} />
        </div>
      </SheetContent>
    </Sheet>
  );
}
