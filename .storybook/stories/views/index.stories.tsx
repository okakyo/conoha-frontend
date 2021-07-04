import React from "react"
import { storiesOf } from '@storybook/react';
import Index  from "../../../src/pages/index";
import { ChakraProvider } from "@chakra-ui/react";
storiesOf("Views/Index",module)
.add("Index Pages",()=>{
	return (
		<ChakraProvider>
			<Index/>
		</ChakraProvider>
		
	)
	
})
