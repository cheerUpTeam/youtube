import SidebarLink from "@components/SidebarLink";
import { MdHomeFilled, MdOutlineSubscriptions } from "react-icons/md";
import { PiThumbsUp } from "react-icons/pi";
function Sidebar() {
  return (
    <aside className="w-20 hidden md:flex">
      <nav className="flex flex-col gap-6 pt-10 text-2xl">
        <SidebarLink
          to=""
          className=" flex-col p-0 px-0 gap-0"
          icon={<MdHomeFilled />}
        >
          <p className="text-[10px] leading-3"> Home</p>
        </SidebarLink>
        <SidebarLink
          to="/subscriptions"
          className="flex-col p-0 px-0 gap-0 bg-transparent"
          icon={<MdOutlineSubscriptions />}
        >
          <p className="text-[10px] leading-3"> Subscriptions</p>
        </SidebarLink>
        <SidebarLink
          to="/liked"
          className="flex-col p-0 px-0 gap-0 bg-transparent"
          icon={<PiThumbsUp />}
        >
          <p className="text-[10px] leading-3 "> Liked Videos</p>
        </SidebarLink>
      </nav>
    </aside>
  );
}

export default Sidebar;
