import {Flex, Divider, IconButton,Avatar,MenuIcon, Heading,Text} from "@chakra-ui/react";
import { FC, useState } from "react";
export const LeftSidebar:FC = ()=>{
	const [navSize, changeNavSize] = useState("large")
	return (
		<>
		<Flex
			position="sticky"
			bgColor="gray.200"
			p={4}
			left="5"
			h="80vh"
			mt="2.5vh"
			borderRadius={navSize=="small"?'15px':'30px'}
			w = {navSize=="small"?"75px":"200px"}
			flexDir="column"
			justifyContent="space-between"
		>
			<Flex
				p="5%"
				flexDir="column"
				alignItems={navSize=="small"?"center":"flex-start"}
				as="nav"
			>
				<IconButton
					aria-label="change-nav"
					background="none"
					mt={5}
					_hover={{background:'none'}}
					onClick={()=>{
						navSize=="small"?changeNavSize("large"):changeNavSize("small")
					}}
				/>
			</Flex>
			<Flex
				p="5%"
				flexDir="column"
				w="100%"
				alignItems={navSize=="small"?"center":"flex-start"}
				mb={4}
			>
				<Divider display={navSize=="small"?"none":"flex"} />
				<Flex mt={4} align="center">
					<Avatar size="sm"/>
					<Flex mt={4} align="center">
						<Heading as="h3" size="sm">Sample</Heading>		
						<Text color="grey">Admin</Text>
					</Flex>	
				</Flex>
				
			</Flex>
		</Flex>
		</>
	)
	
}
