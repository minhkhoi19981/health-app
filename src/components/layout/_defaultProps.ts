import { IconChallenge, IconInfo, IconMemo } from "~/assets/icons";

export const MENUS = [
  {
    icon: IconMemo,
    label: "自分の記録",
    name: "my-own-record",
    route: "/my-own-record",
  },
  {
    icon: IconChallenge,
    label: "チャレンジ",
    name: "trial",
    route: "/trial",
  },
  {
    icon: IconInfo,
    label: "お知らせ",
    name: "notice",
    notification: 1,
    route: "/notice",
  },
];

export const MENUS_POPOVER = [
  {
    label: "自分の記録",
    key: "my-own-record",
    route: "/my-own-record",
  },
  {
    label: "体重グラフ",
    key: "weight-graph",
    route: "/weight-graph",
  },
  {
    label: "目標",
    key: "goal",
    route: "/goal",
  },
  {
    label: "選択中のコース",
    key: "current-course-selection",
    route: "/current-course-selection",
  },
  {
    label: "コラム一覧",
    key: "column-directory",
    route: "/column-directory",
  },
  {
    label: "設定",
    key: "settings",
    route: "/settings",
  },
];

export const MENUS_FOOTER = [
  {
    label: "会員登録",
    key: "membership-registration",
    route: "/membership-registration",
  },
  {
    label: "運営会社",
    key: "management-company",
    route: "/membership-registration",
  },
  {
    label: "利用規約",
    key: "terms-of-service",
    route: "/terms-of-service",
  },
  {
    label: "個人情報の取扱について",
    key: "privacy-policy",
    route: "/privacy-policy",
  },
  {
    label: "特定商取引法に基づく表記",
    key: "specific-commercial-transactions-act",
    route: "/specific-commercial-transactions-act",
  },
  {
    label: "お問い合わせ",
    key: "contact",
    route: "/contact",
  },
];
