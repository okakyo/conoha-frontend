import { BaseLayout } from "@/components/templates/layouts/BaseLayout";
import { Box } from "@chakra-ui/react";
import React from "react";

export default function EditArticlePage() {
  return (
    <>
      <BaseLayout isSidebar={false}>
        <Box mb={4} p={2} color="gray.600"></Box>
      </BaseLayout>
    </>
  );
}
