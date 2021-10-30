import { Box, Image, AspectRatio } from "@chakra-ui/react";
import router from "next/router";

type CardProps = {
  id: string;
  title: string;
  uri?: string;
  author?: string;
  thumbnail?: string;
  avatar?: string;
  updatedAt?: Date;
};

export const TaskCard = (props: CardProps) => {
  return (
    <>
      <Box
        mx={3}
        my={2}
        cursor="pointer"
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        _hover={{ boxShadow: "lg" }}
        _active={{ bgColor: "gray.300" }}
        onClick={() => router.push(`articles/${props.id}`)}
      >
        <AspectRatio maxW="sm" ratio={2}>
          <Image src="/noimg.png" />
        </AspectRatio>
        <Box p={3}>
          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {props.title}
          </Box>
        </Box>
      </Box>
    </>
  );
};
