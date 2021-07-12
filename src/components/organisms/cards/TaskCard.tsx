import {Box,Image,Link,LinkProps,AspectRatio} from "@chakra-ui/react";
import NextLink from "next/link";

type CardProps = {
	id:string
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
			<NextLink href={`articles/${props.id}`}>
				<Link>
					<Box
					maxW="sm"
					borderWidth="1px" 
					borderRadius="lg" 
					overflow="hidden" 
					_hover={{boxShadow:"lg"}}
					_active={{ bgColor: "gray.300" }}
					>
						<AspectRatio maxW="sm" ratio={2}>
							<Image src=
								"/noimg.png"
							
							/>
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
				</Link>
			</NextLink>
		</>
	)
}
