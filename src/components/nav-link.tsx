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
          className="nav__link font-pixel group/link text-h1 relative inline-flex items-center font-medium text-white transition-opacity duration-500"
        >
          <ArrowUpRight className="invisible absolute h-8 w-8 opacity-0 group-hover/link:visible group-hover/link:opacity-100" />
          <span className="group-hover/link:text-second after:transition-width duration-400 relative transition-all after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:bg-white after:duration-500 after:ease-out after:content-[''] group-hover/link:ml-10 group-hover/link:after:w-full">
            {title}
          </span>
        </a>
      </li>
    </SheetTrigger>
  );
}
