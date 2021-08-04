import { UserProfile } from "@auth0/nextjs-auth0";
import { Flex, Avatar, Box, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";

type Props = {
  user?: UserProfile;
};

export const TheHeader = ({ user }: Props) => {
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
        <Box display={{ base: "block", md: "none" }}></Box>
        <Flex />
        {user ? (
          <Avatar size="md" src={user.picture} />
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
    </>
  );
};
