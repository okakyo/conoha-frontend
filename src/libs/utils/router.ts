import { MdHome, MdSettings, MdPerson } from "react-icons/md";
import router, { NextRouter } from "next/router";

export type SidebarListProps = {
  to: string;
  name: string;
  isActive?: boolean;
  isOpen?: boolean;
  icon: any;
};

export const RouterList = (): SidebarListProps[] => {
  return [
    { to: "/", name: "Home", isActive: false, icon: MdHome },
    { to: "/teams", name: "Teams", isActive: false, icon: MdPerson },
    { to: "/setting", name: "Setting", isActive: false, icon: MdSettings },
  ];
};

export const isActivePath = (router: NextRouter, to: string): boolean =>
  router.pathname === to;
