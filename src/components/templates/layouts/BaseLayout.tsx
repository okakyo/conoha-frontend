import {  Container,Box,Flex } from '@chakra-ui/react'
import {TheHeader} from "@/components/molecules/headers/TheHeader";
import {LeftSidebar} from "@/components/organisms/sidebar/TheSidebar";
import {TheFooter} from "@/components/organisms/footer/TheFooter";

export const BaseLayout = ({children})=>{
	return(
		<>
		<Flex>
				<LeftSidebar/>
				<Box 
					width="100%"
				>
				<TheHeader/>
				<Container
					h="90vh"
					p={4}
					maxW="container.xl"
				>
					{children}
				</Container>
				<TheFooter/>
			</Box>
			</Flex>
		</>
	)
}
