import { ChakraProvider, Container,Box } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import {TheHeader} from "@/components/molecules/headers/TheHeader";
const cache = new InMemoryCache();
const client = new ApolloClient({
  uri: `api:3000/graphql`,
  cache,
});

function MyApp({ Component, pageProps }:AppProps) {
  return (
	<ChakraProvider>
		<ApolloProvider client={client}>
			<TheHeader/>
			<Box bgColor="blackAlpha.100" height="100%">
			<Container
				
				maxW="container.lg"
				padding={5}
			>
				<Component {...pageProps} />
			</Container>
			</Box>
			
		</ApolloProvider>
	</ChakraProvider>
  )
}

export default MyApp
