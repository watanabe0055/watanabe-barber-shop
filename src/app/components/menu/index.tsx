import { MENU } from "@/app/const/menu";
import MenuList from "./atoms/menuList";

const Menu = () => {
  return (
    <>
      <MenuList meunuList={MENU} />
    </>
  );
};

export default Menu;
