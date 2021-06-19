import {Flex, Heading, useDisclosure,Box,Text,Stack,Button} from "@chakra-ui/react";
import {VFC} from "react";
import { HamburgerIcon } from "@chakra-ui/icons";

type props= {
	
}


export const TheHeader:VFC<props> = (props)=>{
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
				bg="teal.500"
				color="white"
				{...props}
			>
			
			<Flex align="center" mr={5}>
				<Heading as="h1" size="lg" letterSpacing={"tighter"}>
					Sample Text
				</Heading>
			</Flex>
			<Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
				<HamburgerIcon/>
			</Box>
			<Box
				display={{ base: isOpen ? "block" : "none", md: "block" }}
				mt={{ base: 4, md: 0 }}
			>
				<Button
				variant="outline"
				_hover={{ bg: "teal.700", borderColor: "teal.700" }}
				>
				Create account
				</Button>
			</Box>
			</Flex>
		</>
	)
}