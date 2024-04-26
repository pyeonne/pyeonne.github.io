import type { ReactNode } from 'react';

interface Props {
  href?: string;
  icon: ReactNode;
}

export default function NavSocialLink({ href = '#', icon }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="nav__social-link flex h-10 w-10 items-center justify-center text-white transition-all duration-400 ease-in-out hover:-translate-y-1 hover:text-second"
    >
      {icon}
    </a>
  );
}
