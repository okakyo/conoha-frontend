import {  Container,Box,Flex } from '@chakra-ui/react'
import {TheHeader} from "@/components/organisms/headers/TheHeader";
import {LeftSidebar} from "@/components/organisms/sidebar/TheSidebar";
import {TheFooter} from "@/components/organisms/footer/TheFooter";
import { useEffect, useState } from "react";
import { useUserLocalContext } from '@/hooks';

export const BaseLayout = ({ children }) => {
	// TODO: このLocalStorage については分割を行う
	const {isOpen,setIsOpen} = useUserLocalContext()
	return(
		<>
		<Flex>
				<LeftSidebar isOpen={isOpen} setOpen={setIsOpen}/>
				<Box 
					width="100%"
				>
				<TheHeader />
				
				<Container
					minH="90vh"
					p={4}
					maxW="container.lg"
				>
					{children}
				</Container>
				<TheFooter/>
			</Box>
			</Flex>
		</>
	)
}
