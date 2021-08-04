import { BaseLayout } from "@/components/templates/layouts/BaseLayout";
import { Heading, Box, SimpleGrid, Image, AspectRatio } from "@chakra-ui/react";
import { MemberCard } from "@/components/organisms/cards/MemberCard";
export default function Users() {
  return (
    <>
      <BaseLayout>
        <Box mb={4} p={2} color="gray.600">
          <SimpleGrid py={6} columns={{ base: 2, lg: 3, xl: 4 }}>
            {[2, 3, 3, 4, 5, 6, 1, 4].map((item, i) => (
              <MemberCard key={i} />
            ))}
          </SimpleGrid>
        </Box>
      </BaseLayout>
    </>
  );
}
