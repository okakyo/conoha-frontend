import { Flex,Box } from '@chakra-ui/react'

import Head from 'next/head'
import Image from 'next/image'

const Home = ()=>{
  return (
    <>
	 <Flex
	 	display="inline"
	 >
		 <Box
		 > 
		 <h1>Hello world</h1>
		 </Box> 
	 </Flex>
     
    </>
  )
}

export default Home