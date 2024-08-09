import { Link } from "react-router-dom";

interface SidebarMenuProps {
  to: string;
  text: string;
  icon: React.ReactNode;
}

function SidebarMenu({ to, text, icon }: SidebarMenuProps) {
  return (
    <Link
      to={to}
      className="flex items-center p-1 px-2 gap-3 hover:bg-gray-200/50 hover:rounded-2xl hover:text-black text-black"
    >
      {icon}
      {text}
    </Link>
  );
}

export default SidebarMenu;
