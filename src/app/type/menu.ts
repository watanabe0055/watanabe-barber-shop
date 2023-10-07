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

export const test1 = () => {
  const aaa = "aaa";
  const bbb = "bbb";
  const c = aaa + bbb;
  return c;
};
