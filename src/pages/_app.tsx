import { ChakraProvider, Container,Box,Flex } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const cache = new InMemoryCache();
const client = new ApolloClient({
  uri: `http://localhost:3001/graphql`,
  cache,
  ssrMode:true
});

function MyApp({ Component, pageProps }:AppProps) {
  return (
	<ChakraProvider>
		<Box bgColor="gray.50" height="100vh">
			<ApolloProvider client={client}>
					<Component {...pageProps} />
			</ApolloProvider>
		</Box>
	</ChakraProvider>
  )
}

export default MyApp
