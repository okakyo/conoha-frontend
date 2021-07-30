import {Flex, useDisclosure,Box,Button} from "@chakra-ui/react";
import {useRouter} from "next/router";


export const TheHeader= (props)=>{
	const router = useRouter()
	return (
		<>
			<Flex
				as="nav"
				align="center"
				justify="space-between"
				wrap="wrap"
				padding={6}
				bg="gray.50"
				color="gray.600"
				borderBottom="1px"
				borderColor="gray.200"
			>
			
				<Box display={{ base: "block", md: "none" }}>
				</Box>
				<Flex/>
				<Box
					display={{ base: "none", md: "block" }}
					mt={{ md: 0 }}
				>
					<Button
						variant="outline"
						_hover={{ bg: "gray.200" }}
						onClick={()=>router.push("/api/auth/login")}
					>
						ログイン
					</Button>
				</Box>
			</Flex>
		</>
	)
}
