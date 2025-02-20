import { NavbarRoutes } from '@/components/ui/navbar-routes';
import { MobileSidebar } from './mobile-sidebar';

export const Navbar = () => {
  return (
    <div className="p-4 border-b h-full flex items-center shadow-sm">
      <MobileSidebar />
      <NavbarRoutes />
    </div>
  );
};
