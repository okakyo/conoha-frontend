import { Heading, Img, HStack, Text, Box } from "@chakra-ui/react";
import React from "react";

export const ArticleListItem = () => {
  return (
    <>
      <HStack px={5} py={3} borderWidth="1px" borderColor="gray.100">
        <Img
          boxSize="75px"
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
