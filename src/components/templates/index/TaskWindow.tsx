import { useArticlesQuery } from "@/graphql/client";
import { TaskCard } from "@/components/organisms/cards/TaskCard";
import { BaseGrid } from "@/components/molecules/grids/BaseGrid";
import { Center, Divider, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { ArticleListItem } from "@/components/molecules";

export const ArticleWindow = () => {
  const { data, loading, error } = useArticlesQuery({
    variables: { userId: "sample-1" },
  });
  if (loading) return <div>Loading</div>;
  if (error) return <div>{error.message}</div>;
  else {
    return (
      <>
        <BaseGrid>
          {data.articles.map((article, index) => (
            <div key={index}>
              <TaskCard
                id={article.id}
                title={article.title}
                thumbnail={article.thumbnail}
              />
              <TaskCard
                id={article.id}
                title={article.title}
                thumbnail={article.thumbnail}
              />
            </div>
          ))}
        </BaseGrid>
        <Center p={5}>
          <NextLink href={`articles`}>
            <Link>記事の続きはこちら</Link>
          </NextLink>
        </Center>
      </>
    );
  }
};
