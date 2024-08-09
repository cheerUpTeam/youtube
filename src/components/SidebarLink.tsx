import { PropsWithChildren, ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";

interface SidebarLinkProps {
  to: string;
  icon: ReactNode;
}

function SidebarLink({
  children,
  to,
  icon,
}: PropsWithChildren<SidebarLinkProps>) {
  const { pathname } = useLocation();
  const isFilled = pathname === to;

  return (
    <Link
      to={to}
      className={`flex items-center p-1 px-2 gap-3 text-black transition-all hover:bg-gray-200/50 hover:rounded-2xl hover:text-black
        ${isFilled && "bg-gray-200/50"}`}
    >
      {icon}
      {children}
    </Link>
  );
}

export default SidebarLink;
