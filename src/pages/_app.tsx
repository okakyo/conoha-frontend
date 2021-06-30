import { ChakraProvider, Container,Box } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import {TheHeader} from "@/components/molecules/headers/TheHeader";
import {LeftSidebar} from "@/components/organisms/sidebar/TheSidebar";
const cache = new InMemoryCache();
const client = new ApolloClient({
  uri: `api:3000/graphql`,
  cache,
});

function MyApp({ Component, pageProps }:AppProps) {
  return (
	<ChakraProvider>
		<Box bgColor="gray.100" height="100vh">
		<ApolloProvider client={client}>
			<TheHeader/>
			<Container
				display="inline"
				maxW="container.xl"
				padding={5}
				
			>
				<LeftSidebar/>
				<Component {...pageProps} />
			</Container>
		</ApolloProvider></Box>
	</ChakraProvider>
  )
}

export default MyApp
