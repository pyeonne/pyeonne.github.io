import { SheetTrigger } from '@/components/ui/sheet';

interface Props {
  href?: string;
  title: string;
}

export default function NavLink({ href = '#', title }: Props) {
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
