import { MENU } from "@/app/const/menu";
import MenuList from "./atoms/menuList";
import GlassMorphism from "@/app/atoms/GlassMorphism";

const MenuSection = () => {
  return (
    <>
      <GlassMorphism>
        <MenuList menuList={MENU} />
      </GlassMorphism>
    </>
  );
};

export default MenuSection;
