'use client';

import { LucideIcon } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import cn from 'classnames';

interface SidebarItemProps {
  icon: LucideIcon;
  label: string;
  href: string;
}

export const SidebarItem = ({ icon: Icon, label, href }: SidebarItemProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const isActive =
    (pathname === '/' && href === '/') ||
    pathname === href ||
    pathname?.startsWith(`${href}/`);

  const onClick = () => {
    router.push(href);
  };

  return (
    <button
      onClick={onClick}
      type="button"
      className={cn(
        'flex items-center gap-x-2 text-sm font-[500] pl-6 transition-all hover:text-yellow-400',
        {
          'text-sky-700':
            isActive && 'text-sky-500 bg-sky-200/20 hover:bg-sky-200/20 ',
        }
      )}
    >
      <div className="flex items-center gap-x-2 py-4">
        <Icon size={22} />
        {label}
      </div>
      <div
        className={cn(
          'ml-auto opacity-0 border-2 border-pink-500 h-full transition-all',
          isActive && 'opacity-100'
        )}
      />
    </button>
  );
};
