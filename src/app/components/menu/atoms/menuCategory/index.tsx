type Category = {
  listName: string;
};

/**
 * メニューのカテゴリーを表示するコンポーネント
 */
const MenuCategory: React.FC<Category> = ({ listName }) => {
  let displayText;

  switch (listName) {
    case "CUT_LIST":
      displayText = "Cut";
      break;
    case "COLOR_LIST":
      displayText = "Color";
      break;
    default:
      displayText = listName;
      break;
  }

  return <div className="text-lg text-black-500 font-bold">{displayText}</div>;
};

export default MenuCategory;
