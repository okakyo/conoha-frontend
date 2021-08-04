import { useUser, UserProvider } from "@auth0/nextjs-auth0";
import { useEffect } from "react";

export const AuthMiddleware = ({ children }) => {
  const { user, error, isLoading } = useUser();
  if (isLoading) return <>Loading...</>;
  if (error) return <>{error.message}</>;
  if (user) {
    const userId = user.sub;
  }
  return { children };
};
