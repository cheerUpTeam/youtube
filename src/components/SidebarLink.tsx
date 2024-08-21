import { PropsWithChildren, ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";

interface SidebarLinkProps {
  to: string;
  icon: ReactNode;
  classname: string;
}

function SidebarLink({
  children,
  to,
  icon,
  classname,
}: PropsWithChildren<SidebarLinkProps>) {
  const { pathname } = useLocation();
  const isFilled = pathname === to;

  return (
    <Link
      to={to}
      className={`flex items-center p-2 px-3 gap-3 text-black transition-all hover:bg-gray-200/50  hover:text-black
        ${isFilled && "bg-gray-200/50 font-semibold"} ${classname}`}
    >
      {icon}
      {children}
    </Link>
  );
}

export default SidebarLink;
