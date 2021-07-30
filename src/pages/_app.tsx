import { ChakraProvider, Container,Box,Flex } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { UserLocalProvider,useUserLocalContext } from "@/hooks";
import { useRouter } from 'next/router';
import { UserProvider } from '@auth0/nextjs-auth0';
const cache = new InMemoryCache();
const client = new ApolloClient({
  uri: `http://localhost:3001/graphql`,
  cache,
  ssrMode:true
});

function MyApp({ Component, pageProps }: AppProps) {
	const router = useRouter()
  // useEffect を使用
	return (
		<UserProvider>
			<ChakraProvider>
				<Box bgColor={router.pathname === "/signup" ? "gray.200" :'gray.50'} height="100%">
					<UserLocalProvider>
						<ApolloProvider client={client}>
							<Component {...pageProps} />
						</ApolloProvider>
					</UserLocalProvider>
				</Box>
			</ChakraProvider>	
		</UserProvider>
  )
}

export default MyApp
