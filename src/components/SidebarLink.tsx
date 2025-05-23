import { PropsWithChildren, ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";

interface SidebarLinkProps {
  to: string;
  icon: ReactNode;
  className?: string;
}

function SidebarLink({
  children,
  to,
  icon,
  className,
}: PropsWithChildren<SidebarLinkProps>) {
  const { pathname } = useLocation();
  const isFilled = pathname === to;

  return (
    <Link
      to={to}
      className={`flex items-center  pl-2 gap-3  transition-all hover:bg-gray-200/50
        ${isFilled && "bg-gray-200/50"} ${className}`}
    >
      {icon}
      {children}
    </Link>
  );
}

export default SidebarLink;
