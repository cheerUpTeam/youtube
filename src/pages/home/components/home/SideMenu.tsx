import SidebarLink from "@components/SidebarLink";
import { MdHomeFilled, MdOutlineSubscriptions } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";

interface SidebarProps {}

function Sidebar({}: SidebarProps) {
  return (
    <aside className="hidden absolute left-1 md:flex">
      <nav className="flex flex-col gap-6 pt-10 text-2xl">
        <SidebarLink
          to=""
          classname="flex-col p-0 px-0 gap-0"
          icon={<MdHomeFilled />}
        >
          <p className="text-[10px] leading-3"> Home</p>
        </SidebarLink>
        <SidebarLink
          to=""
          classname="flex-col p-0 px-0 gap-0"
          icon={<SiYoutubeshorts />}
        >
          <p className="text-[10px] leading-3"> Shorts</p>
        </SidebarLink>
        <SidebarLink
          to=""
          classname="flex-col p-0 px-0 gap-0"
          icon={<MdOutlineSubscriptions />}
        >
          <p className="text-[10px] leading-3"> Subscriptions</p>
        </SidebarLink>
      </nav>
    </aside>
  );
}

export default Sidebar;
