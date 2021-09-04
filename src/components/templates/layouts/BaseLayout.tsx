import { Container, Box, Flex, AspectRatio, Image } from "@chakra-ui/react";
import { TheHeader, LeftSidebar, TheFooter } from "@/components";
import { useUserLocalContext } from "@/hooks";
import { useUser } from "@auth0/nextjs-auth0";
import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
  imgThumbnail?: string;
  isSidebar?: boolean;
};

export const BaseLayout = ({
  imgThumbnail,
  children,
  isSidebar = true,
}: LayoutProps) => {
  const { isOpen, setIsOpen } = useUserLocalContext();
  const { user } = useUser();
  return (
    <>
      <Flex>
        {isSidebar && <LeftSidebar isOpen={isOpen} setOpen={setIsOpen} />}
        <Box width="100%">
          <TheHeader user={user} />
          {imgThumbnail && (
            <AspectRatio mb={5} ratio={3}>
              <Image src={imgThumbnail} />
            </AspectRatio>
          )}
          <Container minH="90vh" p={4} maxW="container.lg">
            {children}
          </Container>
          <TheFooter />
        </Box>
      </Flex>
    </>
  );
};
