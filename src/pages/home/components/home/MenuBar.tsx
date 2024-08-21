import useMenuQuery from "@services/menu/useMenuQuery";

interface MenuBarProps {}

function MenuBar({}: MenuBarProps) {
  const { menuData } = useMenuQuery.useMenu();

  return (
    <section className="w-screen whitespace-nowrap overflow-hidden">
      <ul className="flex gap-4 translate-x-0">
        {menuData?.items?.map(({ snippet }, idx) => (
          <li className="" key={idx}>
            {snippet.title}
          </li>
        ))}
      </ul>
    </section>
  );
}
export default MenuBar;
