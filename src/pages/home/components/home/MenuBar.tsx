import SidebarLink from "@components/SidebarLink";
import useMenuQuery from "@services/menu/useMenuQuery";

interface MenuBarProps {}

function MenuBar({}: MenuBarProps) {
  const { menuData } = useMenuQuery.useMenu();

  return (
    <section className="w-full whitespace-nowrap overflow-hidden my-5">
      <ul className="flex gap-4 translate-x-0  w-[calc(100vw-60px)] overflow-auto md:w-[calc(100vw-140px)]">
        <SidebarLink
          to=""
          icon
          classname="rounded-lg bg-gray-200/50 font-semibold text-sm hover:brightness-50"
        >
          All
        </SidebarLink>

        {menuData?.items?.map(({ snippet }, idx) => (
          <SidebarLink
            to=""
            icon
            classname="rounded-lg bg-gray-200/50 font-semibold text-sm hover:brightness-50"
            key={idx}
          >
            {snippet.title}
          </SidebarLink>
        ))}
      </ul>
    </section>
  );
}
export default MenuBar;
