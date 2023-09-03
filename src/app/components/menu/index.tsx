import { MENU } from "@/app/const/menu";
import MenuList from "./atoms/menuList";

const Menu = () => {
  return (
    <>
      <MenuList menuList={MENU} />
    </>
  );
};

export default Menu;
