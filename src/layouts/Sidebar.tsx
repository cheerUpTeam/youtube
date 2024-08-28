import { Dispatch, SetStateAction, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  MdHomeFilled,
  MdOutlineSubscriptions,
  MdOutlineDarkMode,
} from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import SidebarLink from "@components/SidebarLink";
import useDarkStore from "../store/darkStroe";

interface SidebarProps {
  setToggle: Dispatch<SetStateAction<boolean>>;
}

function Sidebar({ setToggle }: SidebarProps) {
  const onClickMenu = useCallback(() => {
    setToggle((toggle) => !toggle);
  }, []);
  const { toggleDarkMode, darkMode } = useDarkStore();

  return (
    <aside className="flex left-0 fixed h-screen w-full z-10">
      <div className="w-80 h-full bg-white overflow-auto">
        <img
          className="mx-auto"
          src="https://www.gstatic.com/youtube/img/promos/growth/3e320f2068ae3f1cb319128f120e09421e3708560bd4273b77e06893ccfdd90e_122x56.webp"
          alt="Meet the table tennis community"
        />
        {/* <MdOutlineDarkMode
          onClick={toggleDarkMode}
          className="size-6 cursor-pointer hover:scale-110 dark:fill-white"
        /> */}

        <button
          onClick={() => {
            if (
              localStorage.theme === "dark" ||
              (!("theme" in localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
            ) {
              document.documentElement.classList.add("dark");
            } else {
              document.documentElement.classList.remove("dark");
            }

            console.log(localStorage.theme);
            if (localStorage.theme === "light") localStorage.theme = "dark";
            else localStorage.theme = "light";

            // Whenever the user explicitly chooses dark mode
            // localStorage.theme = "dark";

            // Whenever the user explicitly chooses to respect the OS preference
            // localStorage.removeItem("theme");
            // console.log(localStorage.theme);
          }}
          className=""
        >
          {darkMode ? "Dark Mode" : "Light Mode"}
        </button>

        <nav className="p-4 flex flex-col gap-2 text-lg">
          <SidebarLink classname="" to="/" icon={<MdHomeFilled />}>
            Home
          </SidebarLink>
          <SidebarLink to="" icon={<SiYoutubeshorts />}>
            Shorts
          </SidebarLink>
          <SidebarLink to="" icon={<MdOutlineSubscriptions />}>
            Subscriptions
          </SidebarLink>
        </nav>

        <p className="p-4 text-xs text-slate-400">
          © 2024 Google LLC, Sundar Pichai, 1600 Amphitheatre Parkway, Mountain
          View CA 94043, USA, 0807-882-594 (free),
          yt-support-solutions-kr@google.com, Hosted by Google LLC,
          <Link
            target="_blank"
            to="https://support.google.com/youtube/answer/12480034?visit_id=638587880392283908-1935768965&p=korea_report&rd=1"
          >
            Business Information,
          </Link>
          ,
          <Link
            target="_blank"
            to="https://support.google.com/youtube/answer/12480034?visit_id=638587880392283908-1935768965&p=korea_report&rd=1"
          >
            Report illegally filmed content
          </Link>
          <br />
          Products shown, tagged or featured on YouTube by creators are sold by
          merchants and are subject to merchant's terms and conditions. YouTube
          does not sell these products and is not responsible for them.
        </p>
      </div>

      <div onClick={onClickMenu} className="w-full bg-black/50" />
    </aside>
  );
}

export default Sidebar;
