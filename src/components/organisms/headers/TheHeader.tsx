import { UserProfile } from "@auth0/nextjs-auth0";
import {
  Flex,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Icon,
  Box,
  Button,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import React from "react";
import { TheDrawer } from "../drawers/TheDrawer";
import { MdExitToApp, MdSettings } from "react-icons/md";
type Props = {
  user?: UserProfile;
};

export const TheHeader = ({ user }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  return (
    <>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        px={6}
        py={4}
        bg="gray.50"
        color="gray.600"
        borderBottom="1px"
        borderColor="gray.200"
      >
        <IconButton
          display={{ base: "display", md: "none" }}
          aria-label="drawer-menu"
          icon={<HamburgerIcon />}
          variant="outline"
          onClick={() => onOpen()}
        />
        <Flex />
        {user ? (
          <Menu>
            <MenuButton>
              <Avatar size="md" src={user.picture} />
            </MenuButton>
            <MenuList>
              <MenuItem
                py={3}
                onClick={() => router.push("/setting")}
                icon={<Icon boxSize={5} as={MdSettings} />}
              >
                アカウント設定
              </MenuItem>
              <MenuItem
                py={3}
                onClick={() => router.push("/api/auth/logout")}
                icon={<Icon boxSize={5} as={MdExitToApp} />}
              >
                ログアウト
              </MenuItem>
            </MenuList>
          </Menu>
        ) : (
          <Box
            height="48px"
            display={{ base: "none", md: "block" }}
            mt={{ md: 0 }}
          >
            <Button
              variant="outline"
              height="100%"
              _hover={{ bg: "gray.200" }}
              onClick={() => router.push("/api/auth/login")}
            >
              ログイン
            </Button>
          </Box>
        )}
      </Flex>
      <TheDrawer isOpen={isOpen} onClose={onClose} />
    </>
  );
};
