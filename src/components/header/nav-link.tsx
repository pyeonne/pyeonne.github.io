import { SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/libs/utils';

interface Props {
  href?: string;
  title: string;
  className?: string;
}

export default function NavLink({ href = '#', title, className }: Props) {
  return (
    <SheetTrigger className="focus:outline-none">
      <li className={cn('nav__item', className)}>
        <a href={href} className="nav__link">
          {title}
        </a>
      </li>
    </SheetTrigger>
  );
}
