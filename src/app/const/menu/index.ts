import { MenuType } from "@/app/type/menu";

/**
 * メニュー一覧
 */
export const MENU: MenuType = {
  /**
   * カット一覧
   */
  CUT_LIST: [
    {
      name: "カット（シャンプー・ブロー込）",
      price: 2300,
    },
    {
      name: "高校生カット【カット＋シャンプー＆顔そり込み】",
      price: 1800,
    },
    {
      name: "一般カット(ｼｬﾝﾌﾟｰ､眉ｶｯﾄ､お顔そり込)",
      price: 2800,
    },
  ],
  /**
   * カラー一覧
   */
  COLOR_LIST: [
    {
      name: "白髪染め「黒色」【カット＋シャンプー＆顔そり込み】",
      price: 4200,
    },
  ],
};
