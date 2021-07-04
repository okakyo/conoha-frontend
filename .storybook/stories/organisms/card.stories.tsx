import React from "react"
import { Meta,Story } from '@storybook/react';
import {TaskCard} from "../../../src/components/organisms/cards/TaskCard";
import { ChakraProvider } from "@chakra-ui/react";

export default {
	title: "Organisms/Cards",
	components:TaskCard
} as Meta

const Template =(args) =>(
	<ChakraProvider>
		<TaskCard {...args}>
		</TaskCard>
	</ChakraProvider>
	
	)
export const IndexCard = Template.bind({});



