import { ArrowUpRight } from 'lucide-react';

import { SheetTrigger } from './ui/sheet';

interface Props {
  href?: string;
  title: string;
}

export default function NavLink({ href = '#', title }: Props) {
  return (
    <SheetTrigger className="flex">
      <li>
        <a
          href={href}
          className="nav__link group/link relative inline-flex items-center font-pixel text-h1 font-medium text-white transition-opacity duration-500"
        >
          <ArrowUpRight className="invisible absolute h-8 w-8 opacity-0 group-hover/link:visible group-hover/link:opacity-100" />
          <span className="relative transition-all duration-400 after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:bg-white after:transition-width after:duration-500 after:ease-out after:content-[''] group-hover/link:ml-10 group-hover/link:text-second group-hover/link:after:w-full">
            {title}
          </span>
        </a>
      </li>
    </SheetTrigger>
  );
}
