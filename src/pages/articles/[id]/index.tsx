import { useRouter } from "next/router";
import { BaseLayout, ArticleHeader } from "@/components";
import { useArticleQuery } from "@/graphql/client";
import { Flex, Text, Box } from "@chakra-ui/react";
export default function Article() {
  const router = useRouter();
  const { id } = router.query;
  const articleId = Array.isArray(id) ? id.join("") : id;

  const { loading, error, data } = useArticleQuery({
    variables: { id: articleId },
  });
  if (loading) return <BaseLayout>loading...</BaseLayout>;
  if (error) return <BaseLayout>{error.message}</BaseLayout>;
  const article = data.article;
  return (
    <>
      <BaseLayout size="xl">
        <Box mb={3}>
          <ArticleHeader title={article.title} articleId={articleId} />
        </Box>
        <Flex py={3}>
          <Box px={5} w={{ base: "100%", md: "75%" }}>
            <Box h="500px" borderWidth="1px" borderColor="gray.200"></Box>
            <Text p={3} fontSize="2xl">
              {article.content}
            </Text>
          </Box>
          <Box w={{ base: "100%", md: "25%" }}>
            <Box w="100%" p={3} borderWidth="1px" borderColor="gray.100">
              sample
            </Box>
          </Box>
        </Flex>
      </BaseLayout>
    </>
  );
}
