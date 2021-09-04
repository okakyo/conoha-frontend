import { MdHome, MdPerson, MdLibraryBooks } from "react-icons/md";
import { NextRouter } from "next/router";

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
    {
      to: "/articles",
      name: "Articles",
      isActive: false,
      icon: MdLibraryBooks,
    },
    { to: "/teams", name: "Teams", isActive: false, icon: MdPerson },
  ];
};

export const isActivePath = (router: NextRouter, to: string): boolean =>
  router.pathname === to;
