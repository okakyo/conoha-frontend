import React from "react"
import { storiesOf } from '@storybook/react';
import {LeftSidebar} from "../../../src/components/organisms/sidebar/TheSidebar";
import { ChakraProvider,Flex } from "@chakra-ui/react";
storiesOf("Organisms/Sidebar",module)
.add("LeftSidebar",()=>{
	return (
		<ChakraProvider>
			<Flex
				h="100vh"
			>
				<LeftSidebar/>
			</Flex>
			
		</ChakraProvider>
		
	)
	
})
