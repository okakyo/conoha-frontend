import React from "react";
import {
  Drawer,
  DrawerOverlay,
  DrawerBody,
  DrawerHeader,
  DrawerContent,
  HStack,
  Box,
} from "@chakra-ui/react";
import { SidebarList } from "@/components/molecules/lists/SidebarList";
import { RouterList, isActivePath } from "@/libs";
import { useRouter } from "next/router";

type DrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const TheDrawer = ({ onClose, isOpen }: DrawerProps) => {
  const router = useRouter();
  const router_list = RouterList();
  return (
    <>
      <Drawer onClose={onClose} isOpen={isOpen} placement="left" closeOnEsc>
        <DrawerOverlay />
        <DrawerContent bgColor="gray.100">
          <DrawerHeader>
            <HStack
              textAlign="center"
              px={9}
              py={3}
              fontWeight="semibold"
              fontSize="lg"
              spacing="24px"
            >
              <Box>Sample</Box>
            </HStack>
          </DrawerHeader>
          <DrawerBody py={3}>
            {router_list.map((item) => (
              <SidebarList
                key={item.to}
                {...item}
                isActive={isActivePath(router, item.to)}
                isOpen={isOpen}
              />
            ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
