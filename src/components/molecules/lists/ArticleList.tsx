import { Heading, Img, HStack, Text, Box } from "@chakra-ui/react";
import React from "react";

type ArticleItemProps = {
  title: string;
  text: string;
  thumbnail: string;
  url?: string;
};

export const ArticleListItem = (props: ArticleItemProps) => {
  return (
    <>
      <HStack px={5} py={3} borderBottomWidth="1px" borderColor="gray.200">
        <Img
          mr="5"
          objectFit="cover"
          src="https://bit.ly/sage-adebayo"
          alt="Segun Adebayo"
        />
        <Box>
          <Heading size="md">sample</Heading>
          <Text size="xs">
            これはテストです。チェックのほどよろしくお願いします！
          </Text>
        </Box>
      </HStack>
    </>
  );
};
