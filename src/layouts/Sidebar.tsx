import { useCallback } from "react";
import { Link } from "react-router-dom";
import { MdHomeFilled, MdOutlineSubscriptions } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import SidebarMenu from "@components/SidebarMenu";

interface SidebarProps {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

function Sidebar({ toggle, setToggle }: SidebarProps) {
  const onClickMenu = useCallback(() => {
    if (toggle === false) setToggle((toggle) => !toggle);
    console.log(toggle);
  }, [toggle]);
  return (
    <div
      className={`${toggle ? "hidden" : "flex left-0 fixed h-screen w-full "}`}
    >
      <div className="w-80 h-full  bg-white overflow-auto">
        <img
          className="mx-auto"
          src="https://www.gstatic.com/youtube/img/promos/growth/3e320f2068ae3f1cb319128f120e09421e3708560bd4273b77e06893ccfdd90e_122x56.webp"
          alt="Meet the table tennis community"
        />
        <div className="p-4 flex flex-col gap-2 text-lg">
          <SidebarMenu to="/" text="Home" icon={<MdHomeFilled />} />
          <SidebarMenu to="/" text="Shorts" icon={<SiYoutubeshorts />} />
          <SidebarMenu
            to="/"
            text="Subscriptions"
            icon={<MdOutlineSubscriptions />}
          />
        </div>

        <div className="p-4 text-xs text-slate-400">
          © 2024 Google LLC, Sundar Pichai, 1600 Amphitheatre Parkway, Mountain
          View CA 94043, USA, 0807-882-594 (free),
          yt-support-solutions-kr@google.com, Hosted by Google LLC,
          <Link
            target="\_blank"
            to={
              "https://support.google.com/youtube/answer/12480034?visit_id=638587880392283908-1935768965&p=korea_report&rd=1"
            }
          >
            Business Information,
          </Link>
          ,
          <Link
            target="\_blank"
            to={
              "https://support.google.com/youtube/answer/12480034?visit_id=638587880392283908-1935768965&p=korea_report&rd=1"
            }
          >
            {" "}
            Report illegally filmed content
          </Link>
          <br />
          Products shown, tagged or featured on YouTube by creators are sold by
          merchants and are subject to merchant's terms and conditions. YouTube
          does not sell these products and is not responsible for them.
        </div>
      </div>

      <div
        onClick={onClickMenu}
        className="border w-full  bg-gray-500/50"
      ></div>
    </div>
  );
}

export default Sidebar;
