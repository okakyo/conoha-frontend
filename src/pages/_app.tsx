import { ChakraProvider, Container,Box,Flex } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import {TheHeader} from "@/components/molecules/headers/TheHeader";
import {LeftSidebar} from "@/components/organisms/sidebar/TheSidebar";
import {TheFooter} from "@/components/organisms/footer/TheFooter";
const cache = new InMemoryCache();
const client = new ApolloClient({
  uri: `api:3000/graphql`,
  cache,
  ssrMode:true
});

function MyApp({ Component, pageProps }:AppProps) {
  return (
	<ChakraProvider>
		<Box bgColor="gray.50" height="100vh">
		<ApolloProvider client={client}>
			<Flex>
				<LeftSidebar/>
				<Box 
					width="100%"
				>
				<TheHeader/>
				<Box
					px={6}
					pt={4}
					h="90vh"
				>
					<Component {...pageProps} />
				</Box>
				<TheFooter/>
			</Box>
			</Flex>
		</ApolloProvider>
		</Box>
	</ChakraProvider>
  )
}

export default MyApp
