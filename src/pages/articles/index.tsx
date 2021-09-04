import { Box, Heading } from "@chakra-ui/react";
import { ArticleWindow } from "@/components/templates/index/TaskWindow";
import { BaseLayout } from "@/components/templates/layouts/BaseLayout";

export default function ArticlesPages() {
  return (
    <>
      <BaseLayout>
        <Box mb={4} p={2} color="gray.600">
          <ArticleWindow />
        </Box>
      </BaseLayout>
    </>
  );
}
