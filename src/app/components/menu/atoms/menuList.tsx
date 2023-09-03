import { MenuType } from "@/app/type/menu";
import MenuCategory from "./menuCategory";
import PriceData from "./priceData";

interface MenuListProps {
  menuList: MenuType;
}

const MenuList: React.FC<MenuListProps> = ({ menuList }) => {
  return (
    <div className="bg-gray-100 p-4 md:p-8 text-gray-900">
      <div className="bg-white p-4 rounded-lg shadow-md max-w-xl mx-auto">
        <h3 className="p-5 text-2xl font-bold text-center">Menu</h3>
        <div className="bg-white p-4 rounded-lg shadow-md">
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
        </div>
      </div>
    </div>
  );
};

export default MenuList;
