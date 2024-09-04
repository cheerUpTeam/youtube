import SidebarLink from "@components/SidebarLink";
import { MdHomeFilled, MdOutlineSubscriptions } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";

interface SidebarProps {}

function Sidebar({}: SidebarProps) {
  return (
    <aside className="w-20 hidden md:flex">
      <nav className="flex flex-col gap-6 pt-10 text-2xl">
        <SidebarLink
          to=""
          className=" flex-col p-0 px-0 gap-0"
          icon={<MdHomeFilled />}
        >
          <p className="text-[10px] leading-3"> Homehello</p>
        </SidebarLink>
        <SidebarLink
          to=""
          className="flex-col p-0 px-0 gap-0"
          icon={<SiYoutubeshorts />}
        >
          <p className="text-[10px] leading-3"> Shorts</p>
        </SidebarLink>
        <SidebarLink
          to=""
          className="flex-col p-0 px-0 gap-0"
          icon={<MdOutlineSubscriptions />}
        >
          <p className="text-[10px] leading-3"> Subscriptions</p>
        </SidebarLink>
      </nav>
    </aside>
  );
}

export default Sidebar;
