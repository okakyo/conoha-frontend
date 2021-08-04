import { ReactNode } from "react";
import { useState, createContext, useContext } from "react";

type StateType = {
  isOpen: boolean;
  isDark: boolean;
  setIsOpen: () => void;
  setIsDark: () => void;
};

/* eslint @typescript-eslint/no-empty-function: 0 */
export const UserContext = createContext<StateType>({
  isOpen: true,
  isDark: false,
  setIsOpen: () => {},
  setIsDark: () => {},
});

export function useUserLocalContext() {
  return useContext(UserContext);
}

// TODO: ここに User 情報を入力できるようにする
export const UserLocalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isDark, setIsDark] = useState(false);
  const changeIsOpen = () => {
    setIsOpen(!isOpen);
  };
  const changeIsDark = () => {
    setIsDark(!isDark);
  };
  const value = {
    isOpen,
    isDark,
    setIsOpen: changeIsOpen,
    setIsDark: changeIsDark,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
