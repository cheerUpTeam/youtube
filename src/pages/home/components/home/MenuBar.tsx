import SidebarLink from "@components/SidebarLink";
import useMenuQuery from "@services/menu/useMenuQuery";
import { useMemo } from "react";

interface MenuBarProps {}

function MenuBar({}: MenuBarProps) {
  const { menuData } = useMenuQuery.useMenu();

  const items = useMemo(() => {
    if (!menuData) return [];

    return [
      {
        snippet: {
          title: "All",
        },
      },
      ...menuData?.items,
    ];
  }, [menuData]);

  return (
    <nav className="whitespace-nowrap flex gap-4 w-[calc(100vw-20px)] md:w-[calc(100vw-120px)] overflow-auto">
      {items?.map(({ snippet }, idx) => (
        <SidebarLink
          to=""
          icon
          classname="rounded-lg bg-gray-200/50 font-semibold text-sm hover:brightness-50"
          key={idx}
        >
          {snippet.title}
        </SidebarLink>
      ))}
    </nav>
  );
}
export default MenuBar;
