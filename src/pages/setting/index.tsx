import { BaseLayout } from "@/components/templates/layouts/BaseLayout";
import { useUserQuery } from "@/graphql/client";
import { Avatar, Box, Divider, Grid, GridItem, Heading, Wrap, WrapItem } from "@chakra-ui/react";

export default function Setting(){
	const { loading,error,data } = useUserQuery({ variables: { id: "sample-1" } })
	if (loading) {
		return (<div>Loading</div>)
	}
	if (error) {
		return (<div>{error}</div>)
	}
	if (!data.user) {
		return (<div>404 Not Found!</div>)
	}
	const userDetail = data.user;
	return (
    <>
      <BaseLayout>
        <Wrap my={4}>
          <WrapItem>
            <Avatar
              bg="gray.200"
              size="xl"
              name={userDetail.name}
              src={userDetail.thumbnail}
            />
          </WrapItem>
          <WrapItem py={2} px={6}>
            <Box alignContent="center">
              <Heading as="h4" size="md" py={2}>
                {userDetail.name}
              </Heading>
              <Box>{userDetail.introduction.bio}</Box>
            </Box>
          </WrapItem>
        </Wrap>
        <Divider/>
        <Box>
        </Box>
      </BaseLayout>
    </>
  );
}

