import { Box, Heading} from '@chakra-ui/react'
import Head from 'next/head'
import {ArticleWindow} from "@/components/templates/index/TaskWindow";
import {BaseLayout} from "@/components/templates/layouts/BaseLayout";

const Home = ()=>{
	return (
		<>
		<BaseLayout>
			<Box
					mb={4}
					p={2}
					color="gray.600"
				>
					<Heading>
						トップページ
					</Heading>
				</Box>
				<ArticleWindow/>
		</BaseLayout>
		</>
	)
}

export default Home
