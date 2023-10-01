import { MENUS } from "@/app/const/menu";
import MenuList from "../atoms/menu/menuList";
import GlassMorphism from "@/app/atoms/GlassMorphism";

const MenuSection = () => {
  return (
    <>
      <GlassMorphism>
        <MenuList menuList={MENUS} />
      </GlassMorphism>
    </>
  );
};

export default MenuSection;
