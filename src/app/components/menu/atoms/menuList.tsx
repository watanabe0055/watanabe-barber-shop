import { MenuType } from "@/app/type/menu";
import MenuCategory from "./menuCategory";
import PriceData from "./priceData";

interface MenuListProps {
  menuList: MenuType;
}

const MenuList: React.FC<MenuListProps> = ({ menuList }) => {
  return (
    <div>
      {Object.keys(menuList).map((listName) => {
        const key = listName as keyof MenuType;
        return (
          <div key={listName}>
            <MenuCategory listName={listName} />
            <ul>
              {menuList[key].map((item, index) => (
                <li key={index}>
                  <PriceData item={item} />
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default MenuList;
