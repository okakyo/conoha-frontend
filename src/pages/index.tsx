import { SimpleGrid,Box, Flex, Heading } from '@chakra-ui/react'
import {TaskCard} from "@/components/organisms/cards/TaskCard"
import {BaseGrid} from "@/components/molecules/grids/BaseGrid";
import Head from 'next/head'
import Image from 'next/image'

const Home = ()=>{

	// TODO: GraphQL の情報のやりとりはここで行う。
	return (
		<>
			<Box
				mb={4}
				p={2}
				color="gray.600"

			>
				<Heading>
					トップページ
				</Heading>
			</Box>
			<BaseGrid
			>
				<TaskCard title="sample" thumbnail="https://bit.ly/2Z4KKcF"/>
				<TaskCard title="sample" thumbnail="https://bit.ly/2Z4KKcF"/>
			</BaseGrid>
			
		</>
	)
}

export default Home
