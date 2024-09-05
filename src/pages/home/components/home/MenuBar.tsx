import { categoryParams } from "@lib/params";
import useCategoryQuery from "@services/category/useCategoryQuery";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useFilterStore } from "../../../../store/filterStore";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

interface MenuBarProps {
  className?: string;
}

function MenuBar({ className }: MenuBarProps) {
  const { categoryData } = useCategoryQuery.useCategory(categoryParams);

  const [filterMenu, setFilterMenu] = useState("0");
  const { onClickFilter } = useFilterStore();

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
    <Swiper
      modules={[Navigation]}
      spaceBetween={20}
      slidesPerView="auto"
      pagination={{ clickable: true, type: "fraction" }}
      navigation={true}
      className={`whitespace-nowrap flex gap-4 ml-5 md:w-[calc(100vw-140px)] w-[calc(100vw-60px)] overflow-hidden ${className}`}
    >
      {items?.map(({ snippet, id }, idx) => {
        const isSelected = filterMenu === id;
        return (
          <SwiperSlide
            key={idx}
            className={`w-auto cursor-pointer rounded-lg font-semibold text-sm p-2 px-3 ${
              isSelected
                ? "bg-font-01 !text-basic-01"
                : "bg-basic-02 !text-font-01 hover:brightness-50"
            }`}
            onClick={() => onClickMenu(id)}
          >
            {snippet.title}
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
export default MenuBar;
