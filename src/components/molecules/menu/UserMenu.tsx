import { UserProfile } from "@auth0/nextjs-auth0";
import { Avatar } from "@chakra-ui/avatar";
import Icon from "@chakra-ui/icon";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import { NextRouter } from "next/router";
import { MdExitToApp, MdSettings } from "react-icons/md";

type UserMenuProps = {
  user: UserProfile;
  router: NextRouter;
};

export const UserMenu = ({ user, router }: UserMenuProps) => {
  return (
    <>
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
    </>
  );
};
