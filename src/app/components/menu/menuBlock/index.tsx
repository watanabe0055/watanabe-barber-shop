import GlassMorphism from "@/app/atoms/GlassMorphism";
import { MENUS } from "@/app/const/menu";
import MenuAllList from "../atoms/menu/menuAllList";

const MenuBlock = () => {
  return (
    <>
      <GlassMorphism>
        <MenuAllList menuList={MENUS} />
      </GlassMorphism>
    </>
  );
};

export default MenuBlock;
