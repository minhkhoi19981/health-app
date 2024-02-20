import { IconChallenge, IconInfo, IconMemo } from "~/assets/icons";
import { PATH_ROUTE } from "~/utils/constants";

export const MENUS = [
  {
    icon: IconMemo,
    label: "自分の記録",
    name: "my-own-record",
    route: PATH_ROUTE.MY_OWN_RECORD,
  },
  {
    icon: IconChallenge,
    label: "チャレンジ",
    name: "trial",
    route: PATH_ROUTE.TRIAL,
  },
  {
    icon: IconInfo,
    label: "お知らせ",
    name: "notice",
    notification: 1,
    route: PATH_ROUTE.NOTICE,
  },
];

export const MENUS_POPOVER = [
  {
    label: "自分の記録",
    key: "my-own-record",
    route: PATH_ROUTE.MY_OWN_RECORD,
  },
  {
    label: "体重グラフ",
    key: "weight-graph",
    route: PATH_ROUTE.WEIGHT_GRAPH,
  },
  {
    label: "目標",
    key: "goal",
    route: PATH_ROUTE.GOAL,
  },
  {
    label: "選択中のコース",
    key: "current-course-selection",
    route: PATH_ROUTE.CURRENT_COURSE_SELECTION,
  },
  {
    label: "コラム一覧",
    key: "column-directory",
    route: PATH_ROUTE.COLUMN_DIRECTORY,
  },
  {
    label: "設定",
    key: "settings",
    route: PATH_ROUTE.SETTINGS,
  },
];

export const MENUS_FOOTER = [
  {
    label: "会員登録",
    key: "membership-registration",
    route: PATH_ROUTE.MEMBERSHIP_REGISTRATION,
  },
  {
    label: "運営会社",
    key: "management-company",
    route: PATH_ROUTE.MANAGEMENT_COMPANY,
  },
  {
    label: "利用規約",
    key: "terms-of-service",
    route: PATH_ROUTE.TERMS_OF_SERVICE,
  },
  {
    label: "個人情報の取扱について",
    key: "privacy-policy",
    route: PATH_ROUTE.PRIVACY_POLICY,
  },
  {
    label: "特定商取引法に基づく表記",
    key: "specific-commercial-transactions-act",
    route: PATH_ROUTE.SPECIFIC_COMMERCIAL_TRANSACTIONS_ACT,
  },
  {
    label: "お問い合わせ",
    key: "contact",
    route: PATH_ROUTE.CONTRACT,
  },
];
