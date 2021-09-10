import React, { useState } from "react";
import { Flex, Box, Textarea } from "@chakra-ui/react";
import { BaseLayout } from "@/components";
import ReactMarkdown from "react-markdown";
import styles from "@/styles/markdown.module.scss";
import gfm from "remark-gfm";
import { editorKeypress } from "@/libs/utils/keypress";
export default function CreateArticlePage() {
  const [markdown, setMarkdown] = useState("");
  return (
    <>
      <BaseLayout isContainer={false} isSidebar={false}>
        <Flex h="100%" color="gray.600">
          <Textarea
            p={3}
            w={{ base: "100%", md: "50%" }}
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
            onKeyDown={(e: any) => editorKeypress(e, markdown, setMarkdown)}
          />
          <Box px={8} py={2} w={{ base: "100%", md: "50%" }}>
            <ReactMarkdown
              className={styles.markdown}
              children={markdown}
              remarkPlugins={[gfm]}
            />
          </Box>
        </Flex>
      </BaseLayout>
    </>
  );
}
