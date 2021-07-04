import {Box,Image,Link,LinkProps,AspectRatio} from "@chakra-ui/react";
import NextLink from "next/link";

type CardProps = {
	title:string 
	uri?: string
	author?: string
	thumbnail?: string
	avatar?: string 
	updatedAt?:Date
}

export const TaskCard = (props:CardProps)=>{
	return (
		<>
			<Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" _hover={{boxShadow:"md"}}>
				<AspectRatio maxW="sm" ratio={2}>
					<Image src={props.thumbnail}/>
				</AspectRatio>
				<Box p={6}>
					<Box
						mt="1"
						fontWeight="semibold"
						as="h4"
						lineHeight="tight"
						isTruncated
					>
						{props.title}
					</Box>
				</Box>
			</Box>
		</>
	)
}
