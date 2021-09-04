import { Flex, VStack, HStack, Box, IconButton } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import { SidebarList } from "@/components/molecules/lists/SidebarList";
import React from "react";
import { isActivePath, RouterList, SidebarListProps } from "@/libs";

type Props = {
  isOpen: boolean;
  setOpen: any;
};
const leftSidebar = ({ isOpen, setOpen }: Props) => {
  const router = useRouter();
  const router_list: SidebarListProps[] = RouterList();
  return (
    <>
      <Flex
        display={{ base: "none", md: "block" }}
        position="sticky"
        h="100vh"
        px={3}
        py={5}
        left={0}
        w={{ base: "none", md: isOpen ? "300px" : "75px" }}
        top={0}
        bgColor="gray.100"
        borderWidth="1px"
      >
        <HStack px={3} fontWeight="semibold" fontSize="lg" spacing="15px">
          <IconButton
            aria-label="changeSidebarSize"
            fontSize="20px"
            border="none"
            fontWeight="semibold"
            variant="outline"
            onClick={() => setOpen(!isOpen)}
            icon={<HamburgerIcon />}
          ></IconButton>
          {isOpen && <Box>Sample</Box>}
        </HStack>
        <Box py={4}>
          {router_list.map((item) => (
            <SidebarList
              key={item.to}
              {...item}
              isActive={isActivePath(router, item.to)}
              isOpen={isOpen}
            />
          ))}
        </Box>
      </Flex>
    </>
  );
};

export const LeftSidebar = React.memo(leftSidebar);
