/**
 * Menuの詳細
 */
export type MenuItem = {
  name: string;
  price: number;
};

/**
 * メニュー一覧
 */
export type MenuType = {
  CUT_LIST: MenuItem[];
  COLOR_LIST: MenuItem[];
};
