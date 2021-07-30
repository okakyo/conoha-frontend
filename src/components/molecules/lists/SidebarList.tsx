import { Box,Link,HStack, } from "@chakra-ui/layout"
import {Icon} from "@chakra-ui/icons"
import NextLink from "next/link"

export type SidebarListProps = {
	to: string
	name:string
	isActive?:boolean
	isOpen?:boolean
	icon:any
}


export const SidebarList=(
	props:SidebarListProps
	)=>{
	return (
		<Box
			w="100%"
			px={5}
			py={3}
			color={props.isActive?"teal.700":"gray.600"}
			bgColor={props.isActive&& "teal.50"}
			_hover={{color:"teal.600" ,bgColor:"teal.50"}}  
		>
			<NextLink href={props.to}>
				<Link>
					<HStack spacing="24px">
						<Icon
							alignItems="center"
							boxSize={6} as ={props.icon}/>
							{props.isOpen&&
								<Box
								fontWeight="semibold"
								>
									{props.name}
								</Box>
							}
					</HStack>
				</Link>
			</NextLink>
		</Box>
		
		
	)
}