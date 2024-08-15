import useMenuQuery from "@services/menu/useMenuQuery";

interface MenuBarProps {}

function MenuBar({}: MenuBarProps) {
  const { menuData } = useMenuQuery.useMenu();

  return (
    <section>
      <ul className="flex items-center flex-col ">
        {menuData?.items?.map(({ snippet }, idx) => (
          <li className="w-full my-6" key={idx}>
            {snippet.title}
          </li>
        ))}
      </ul>
    </section>
  );
}
export default MenuBar;
