type Category = {
  listName: string;
};

/**
 * メニューのカテゴリーを表示するコンポーネント
 */
const MenuCategory: React.FC<Category> = ({ listName }) => {
  switch (listName) {
    case "CUT_LIST":
      return "Cut";
    case "COLOR_LIST":
      return "Color";
    default:
      break;
  }
  return <div>{listName}</div>;
};

export default MenuCategory;
