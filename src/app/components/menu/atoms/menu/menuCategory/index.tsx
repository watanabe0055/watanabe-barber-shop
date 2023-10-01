import Typography from "@/app/atoms/Typography";

type Category = {
  listName: string;
};

/**
 * メニューのカテゴリーを表示するコンポーネント
 */
const MenuCategory: React.FunctionComponent<Category> = ({ listName }) => {
  const categoryMap: { [key: string]: string } = {
    CUT_LIST: "カット",
    COLOR_LIST: "カラー",
    PERM_LIST: "パーマ",
  };
  const displayText = categoryMap[listName] || listName;

  return (
    <>
      <Typography text={displayText} size="xl" weight="bold" />
    </>
  );
};

export default MenuCategory;
