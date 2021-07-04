import React from "react"
import { storiesOf } from '@storybook/react';
import {TheHeader} from "../../../src/components/molecules/headers/TheHeader";
import { ChakraProvider } from "@chakra-ui/react";
storiesOf("molecules/headers",module)
.add("TheHeader",()=>{
	return (
		<ChakraProvider>
			<TheHeader/>
		</ChakraProvider>
	)
	
})
