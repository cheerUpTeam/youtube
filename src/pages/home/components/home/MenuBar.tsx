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
    <div className="relative group">
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView="auto"
        pagination={{ clickable: true, type: "fraction" }}
        navigation={true}
        className={`whitespace-nowrap flex gap-4 ml-5 md:w-[calc(100vw-140px)] w-[calc(100vw-60px)] overflow-hidden z-0

          [&_.swiper-button-next]:bg-gradient-to-l [&_.swiper-button-next]:from-white [&_.swiper-button-next]:via-white [&_.swiper-button-next]:via-50% [&_.swiper-button-next]:to-white/0
          dark:[&_.swiper-button-next]:from-black dark:[&_.swiper-button-next]:via-black dark:[&_.swiper-button-next]:via-50% dark:[&_.swiper-button-next]:to-black/0
          [&_.swiper-button-next]:right-0 [&_.swiper-button-next]:pl-8 [&_.swiper-button-next]:pr-3
          [&_.swiper-button-next.swiper-button-disabled]:bg-none [&_.swiper-button-next.swiper-button-disabled]:text-transparent
          [&_.swiper-button-next]:after:content-['>'] [&_.swiper-button-next]:after:text-xl
          
          [&_.swiper-button-prev]:bg-gradient-to-r [&_.swiper-button-prev]:from-white [&_.swiper-button-prev]:via-white [&_.swiper-button-prev]:via-50% [&_.swiper-button-prev]:to-white/0
          dark:[&_.swiper-button-prev]:from-black dark:[&_.swiper-button-prev]:via-black dark:[&_.swiper-button-prev]:via-50% dark:[&_.swiper-button-prev]:to-black/0
          [&_.swiper-button-prev]:left-0 [&_.swiper-button-prev]:pl-3 [&_.swiper-button-prev]:pr-8
          [&_.swiper-button-prev.swiper-button-disabled]:bg-none [&_.swiper-button-prev.swiper-button-disabled]:text-transparent
          [&_.swiper-button-prev]:after:content-['<'] [&_.swiper-button-prev]:after:text-xl
          
          ${className}`}
      >
        {items?.map(({ snippet, id }, idx) => {
          const isSelected = filterMenu === id;
          return (
            <SwiperSlide
              key={idx}
              className={` w-auto cursor-pointer rounded-lg font-semibold text-sm p-2 px-3 ${
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
    </div>
  );
}
export default MenuBar;
