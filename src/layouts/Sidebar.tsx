function Sidebar({ toggle }) {
  return (
    <div
      className={`${toggle ? "hidden" : "block w-full h-full bg-gray-600/50"}`}
    >
      <ul className="w-28 bg-slate-50">
        <li>메뉴1</li>
        <li>메뉴2</li>
      </ul>
    </div>
  );
}

export default Sidebar;
