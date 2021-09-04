import { useRouter } from "next/router";
import { BaseLayout, ArticleHeader } from "@/components";
import { useArticleQuery } from "@/graphql/client";
import { Divider, Text, Box } from "@chakra-ui/react";
export default function Article() {
  // query の処理
  const router = useRouter();
  const { id } = router.query;
  const articleId = Array.isArray(id) ? id.join("") : id;

  // GraphQL の処理
  const { loading, error, data } = useArticleQuery({
    variables: { id: articleId },
  });
  if (loading) return <BaseLayout>loading...</BaseLayout>;
  if (error) return <BaseLayout>{error.message}</BaseLayout>;
  const article = data.article;
  return (
    <>
      <BaseLayout>
        <Box mb={3}>
          <ArticleHeader title={article.title} articleId={articleId} />
        </Box>
        <Box p={3} borderRadius="md" borderWidth="1px">
          <Box p={1}>
            <Text>{article.description}</Text>
            <Divider />
            <Text>{article.content}</Text>
          </Box>
        </Box>
      </BaseLayout>
    </>
  );
}
