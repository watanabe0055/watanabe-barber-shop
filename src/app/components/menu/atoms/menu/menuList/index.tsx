import { MenuType } from "@/app/type/menu";
import MenuCategory from "../menuCategory";
import PriceData from "../../priceData";
import Typography from "@/app/atoms/Typography";

interface MenuListProps {
  menuList: MenuType;
}

const MenuList: React.FC<MenuListProps> = ({ menuList }) => {
  return (
    <>
      <Typography text="Menu" size="xl3" weight="bold" align="center" />
      {Object.keys(menuList).map((listName) => {
        const key = listName as keyof MenuType;
        return (
          <div key={listName}>
            <MenuCategory listName={listName} />
            <ul className="pl-3">
              {menuList[key].map((item, index) => (
                <li key={index}>
                  <PriceData item={item} />
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </>
  );
};

export default MenuList;
