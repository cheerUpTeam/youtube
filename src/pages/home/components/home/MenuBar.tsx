import { useCallback, useEffect, useMemo, useState } from "react";
import { useFilterStore } from "../../../../store/filterStore";
import useCategoryQuery from "@services/category/useCategoryQuery";
import { categoryParams } from "@lib/params";

interface MenuBarProps {
  className?: string;
}

function MenuBar({ className }: MenuBarProps) {
  const { categoryData } = useCategoryQuery.useCategory(categoryParams);
  const [filterMenu, setFilterMenu] = useState("0");
  const { onClickFilter } = useFilterStore();

  console.log(categoryData?.items);

  const items = useMemo(() => {
    if (!categoryData) return [];

    return [
      {
        id: "0",
        snippet: {
          title: "All",
        },
      },
      ...categoryData.items,
    ];
  }, [categoryData]);

  const onClickMenu = useCallback((menuId: string) => {
    setFilterMenu(menuId);
  }, []);

  useEffect(() => {
    if (filterMenu) {
      onClickFilter(filterMenu);
    }
  }, [filterMenu, onClickFilter]);

  return (
    <ul
      className={`whitespace-nowrap flex gap-4 ml-5 w-[calc(100vw-20px)] md:w-[calc(100vw-110px)] overflow-auto ${className}`}
    >
      {items?.map(({ snippet, id }, idx) => {
        const isSelected = filterMenu === id;
        return (
          <li
            key={idx}
            className={`cursor-pointer rounded-lg font-semibold text-sm p-1 ${
              isSelected
                ? "bg-font-01 !text-basic-01"
                : "bg-basic-02 !text-font-01 hover:brightness-50"
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
