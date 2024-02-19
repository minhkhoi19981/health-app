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

export const MENUS_FOOTER = [
  {
    label: "会員登録",
    key: "会員登録",
  },
  {
    label: "運営会社",
    key: "運営会社",
  },
  {
    label: "利用規約",
    key: "利用規約",
  },
  {
    label: "個人情報の取扱について",
    key: "個人情報の取扱について",
  },
  {
    label: "特定商取引法に基づく表記",
    key: "特定商取引法に基づく表記",
  },
  {
    label: "お問い合わせ",
    key: "お問い合わせ",
  },
];
