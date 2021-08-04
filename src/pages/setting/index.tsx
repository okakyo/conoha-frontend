import { ArticleWindow } from "@/components/templates/index/TaskWindow";
import { BaseLayout } from "@/components/templates/layouts/BaseLayout";
import { useUserQuery } from "@/graphql/client";
import { useUser } from "@auth0/nextjs-auth0";
import {
  Avatar,
  Box,
  Divider,
  Heading,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

export default function Setting(props) {
  const { isLoading, user } = useUser();
  const { loading, error, data } = useUserQuery({
    variables: { id: "sample-1" },
  });
  if (isLoading || loading) {
    return <div>Loading</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }
  if (!user) {
    return <div>404 Not Found!</div>;
  }
  const userDetail = data.user;
  return (
    <>
      <BaseLayout>
        <Wrap my={4} px={4}>
          <WrapItem>
            <Avatar
              bg="gray.200"
              size="xl"
              name={userDetail.name}
              src={user.picture}
            />
          </WrapItem>
          <WrapItem py={2} px={6}>
            <Box alignContent="center">
              <Heading as="h4" size="md" py={2}>
                {user.name}
              </Heading>
              <Box>{userDetail.introduction.bio}</Box>
            </Box>
          </WrapItem>
        </Wrap>
        <Divider mb={5} />
        <ArticleWindow />
      </BaseLayout>
    </>
  );
}
