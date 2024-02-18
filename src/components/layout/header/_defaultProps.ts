import { IconChallenge, IconInfo, IconMemo } from "~/assets/icons";

export const MENUS = [
  {
    icon: IconMemo,
    label: "自分の記録",
    name: "memo",
  },
  {
    icon: IconChallenge,
    label: "チャレンジ",
    name: "challenge",
  },
  {
    icon: IconInfo,
    label: "お知らせ",
    name: "info",
    notification: 1,
  },
];

export const MENUS_POPOVER = [
  {
    label: "自分の記録",
    key: "自分の記録",
  },
  {
    label: "体重グラフ",
    key: "体重グラフ",
  },
  {
    label: "目標",
    key: "目標",
  },
  {
    label: "選択中のコース",
    key: "選択中のコース",
  },
  {
    label: "コラム一覧",
    key: "コラム一覧",
  },
  {
    label: "設定",
    key: "設定",
  },
];
