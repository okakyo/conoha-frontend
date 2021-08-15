import { Flex, Container } from "@chakra-ui/react";
import { ReactNode } from "react";

type TeamLayoutProps = {
  children: ReactNode;
};
export const TeamLayout = ({ children }: TeamLayoutProps) => {
  return (
    <Flex>
      <Container size="container.xl">{children}</Container>
    </Flex>
  );
};
