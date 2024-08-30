import useMenuQuery from "@services/menu/useMenuQuery";
import { useEffect, useMemo, useState } from "react";
import { useFilterStore } from "../../../../store/filterStore";

function MenuBar() {
  const { menuData } = useMenuQuery.useMenu();
  const [filterMenu, setFilterMenu] = useState("0");
  const { onClickFilter } = useFilterStore();

  const items = useMemo(() => {
    if (!menuData) return [];

    return [
      {
        id: "0",
        snippet: {
          title: "All",
        },
      },
      ...menuData.items,
    ];
  }, [menuData]);

  useEffect(() => {
    if (filterMenu) {
      onClickFilter(filterMenu);
    }
  }, [filterMenu, onClickFilter]);

  const onClickMenu = (menuId: string) => {
    setFilterMenu(menuId);
  };

  return (
    <ul className="whitespace-nowrap flex gap-4 ml-5 w-[calc(100vw-40px)] md:w-[calc(100vw-110px)] overflow-auto">
      {items?.map(({ snippet, id }, idx) => {
        const isSelected = filterMenu === id;
        return (
          <li
            key={idx}
            className={`rounded-lg bg-gray-200/50 font-semibold text-sm hover:brightness-50 p-1 ${
              isSelected ? "bg-black text-white" : "bg-gray-200/50"
            }`}
            onClick={() => onClickMenu(id)}
          >
            {snippet.title}
          </li>
        );
      })}
    </ul>
  );
}
export default MenuBar;
