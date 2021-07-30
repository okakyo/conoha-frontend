
import { Box,Avatar,Heading, Center} from "@chakra-ui/react"

export const MemberCard = () => {
	
	return (
		<>
			<Box borderWidth="1px" shadow="sm" maxW="xs"  borderRadius="lg" mx={4} my={6}>
				<Center >
					<Avatar shadow="md" size="lg" mt={-6} />
				</Center>
				<Box p={3}>
					<Center>
						<Heading  as="h3" size="h3">
							チーム名
						</Heading>
					</Center>
				</Box>
			</Box>
    </>
  );
}
