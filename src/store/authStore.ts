import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export enum AUTH {
  AUTHED = "authed",
  NOT_AUTHED = "not_authed",
}

type LocalUser = {
  authed: AUTH;
  id?: string | null;
  email?: string | null;
};

interface Byp {
  user: LocalUser;
  ztSignIn: (payload: SignInOutput) => void;
  removeAuth: () => void;
}

const authStore = create<Byp>()(
  devtools(
    persist(
      (set) => ({
        user: { authed: AUTH.NOT_AUTHED },
        ztSignIn: (payload: SignInOutput) => {
          if (!payload) {
            return;
          }
          set({
            user: {
              authed: AUTH.AUTHED,
              id: payload.id,
              email: payload.email,
            },
          });
        },
        removeAuth: () => {
          set({ user: { authed: AUTH.NOT_AUTHED } });
        },
      }),
      {
        name: "health-app-auth",
        getStorage: () => localStorage,
      },
    ),
  ),
);

export default authStore;
