import {Flex, Heading, useDisclosure,Box,Text,Stack,Button} from "@chakra-ui/react";
import {VFC} from "react";
import { HamburgerIcon } from "@chakra-ui/icons";



export const TheHeader= (props)=>{
	const {isOpen,onOpen,onClose} = useDisclosure();
	const handleToggle = ()=>(isOpen?onClose():onOpen())
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
			
			<Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
				<HamburgerIcon/>
			</Box>
			<Flex></Flex>
			<Box
				display={{ base: isOpen ? "block" : "none", md: "block" }}
				mt={{ base: 4, md: 0 }}
			>
				<Button
					variant="outline"
					_hover={{ bg: "gray.200" }}
					href="/signup"
				>
				Create account
				</Button>
			</Box>
			</Flex>
		</>
	)
}
