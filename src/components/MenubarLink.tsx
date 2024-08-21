import { PropsWithChildren, ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";

interface MenubarLinkProps {
  to: string;
  icon: ReactNode;
}

function MenubarLink({
  children,
  to,
  icon,
}: PropsWithChildren<MenubarLinkProps>) {
  const { pathname } = useLocation();
  const isFilled = pathname === to;

  return (
    <Link
      to={to}
      className={`flex items-center p-1 px-2 gap-3 text-black transition-all hover:bg-gray-200/50  hover:text-black
        ${isFilled && "bg-gray-200/50"}`}
    >
      {icon}
      {children}
    </Link>
  );
}

export default MenubarLink;
