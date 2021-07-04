import {Flex,VStack ,Button,Heading,Link} from "@chakra-ui/react";
import { useRouter } from "next/router";
import NextLink, { LinkProps } from "next/link"

export type SideRouterProps = {
	to: string
	name:string
	isActive?:boolean
}

const SideRouter=(

	props:SideRouterProps)=>{
	return (
		<NextLink href={props.to}>
			<Link 
				w="100%"
				p={3}
				rounded ="xl"
				color={props.isActive?"teal.700":"gray.600"}
				bgColor={props.isActive&& "teal.50"}
				_hover={{color:"teal.600" ,bgColor:"teal.50"}}  >
				{props.name}
			</Link>
		</NextLink>
	)
}

export const LeftSidebar = ()=>{
	const router = useRouter()
	const isActivePath= (to:string)=>router.pathname===to
	const router_list:SideRouterProps[] = [
		{to:"/",name:"Home",isActive:false},
		{to:"/users",name:"Users",isActive:false},
		{to:"/setting",name:"Setting",isActive:false},
]
	return (
		<>
		<Flex
			display={{base:"none", md:"block"}}
			position="sticky"
			h="100vh"
			left={0}
			p={5}
			w={{base:"none",sm:"75px",md:"250px"}}
			top={0}
			bgColor="gray.100"
			borderWidth="1px" 
		>
			<Heading
				as="h3"
				textColor="gray.700"
			>
				Sample
			</Heading>
			
			<VStack py={5}>
				{router_list.map((item)=><SideRouter {...item} isActive={isActivePath(item.to)} />)}
				
			</VStack>
		</Flex>
		</>
	)
	
}
