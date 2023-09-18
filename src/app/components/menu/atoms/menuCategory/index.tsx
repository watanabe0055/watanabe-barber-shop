import Typography from "@/app/atoms/Typography";

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

  return (
    <>
      <Typography text={displayText} size="xl" weight="bold" />
    </>
  );
};

export default MenuCategory;
