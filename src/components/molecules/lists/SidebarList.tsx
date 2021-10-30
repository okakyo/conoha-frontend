import { Box, Link, HStack, Center } from "@chakra-ui/layout";
import { Icon } from "@chakra-ui/icons";
import NextLink from "next/link";
import { SidebarListProps } from "@/libs";
import router from "next/router";

export const SidebarList = (props: SidebarListProps) => {
  return (
    <Box
      w="100%"
      px={3}
      py={3}
      cursor="pointer"
      borderRadius="xl"
      borderWidth="4px"
      borderColor="gray.100"
      color={props.isActive ? "teal.700" : "gray.600"}
      bgColor={props.isActive && "teal.50"}
      _hover={{ color: "teal.600", bgColor: "teal.50" }}
      onClick={() => {
        router.push(props.to);
      }}
    >
      <HStack spacing="24px">
        <Center>
          <Icon alignItems="center" boxSize={6} as={props.icon} />
        </Center>
        {props.isOpen && <Box fontWeight="semibold">{props.name}</Box>}
      </HStack>
    </Box>
  );
};
