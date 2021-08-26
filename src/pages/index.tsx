import { Box } from "@chakra-ui/react";
import { BaseLayout, ArticleWindow, MemberCard } from "@/components";
import { SimpleGrid } from "@chakra-ui/layout";
const Home = () => {
  return (
    <>
      <BaseLayout>
        <Box mb={4} p={2} color="gray.600">
          <ArticleWindow />
          <SimpleGrid py={6} columns={{ base: 2, lg: 3, xl: 4 }}>
            {[2, 3, 3, 4, 5, 6, 1, 4].map((item, i) => (
              <MemberCard key={i} />
            ))}
          </SimpleGrid>
        </Box>
      </BaseLayout>
    </>
  );
};

export default Home;
