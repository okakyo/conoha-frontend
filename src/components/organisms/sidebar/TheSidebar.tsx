import { useState } from "react";
import {MdHome,MdSettings,MdPerson} from "react-icons/md";
import {Flex,VStack ,HStack,Box,Link, IconButton,Icon} from "@chakra-ui/react";
import {HamburgerIcon} from "@chakra-ui/icons";
import { useRouter } from "next/router";
import NextLink, { LinkProps } from "next/link"
import {SidebarListProps,SidebarList} from "@/components/molecules/lists/SidebarList";


export const LeftSidebar = ()=>{
	const router = useRouter()
	const isActivePath= (to:string)=>router.pathname===to
	const [isOpen,setOpen] = useState(true);

	// TODO: Use Pick<T,K> to change the type 
	const router_list:SidebarListProps[] = [
		{to:"/",name:"Home",isActive:false,icon:MdHome},
		{to:"/users",name:"Users",isActive:false,icon:MdPerson},
		{to:"/setting",name:"Setting",isActive:false,icon:MdSettings},
	]
	return (
		<>
			<Flex
				display={{base:"none", md:"block"}}
				position="sticky"
				h="100vh"
				py={5}
				left={0}
				w={{base:"none",md:isOpen?"300px":"75px"}}
				top={0}
				bgColor="gray.100"
				borderWidth="1px" 
			>
				<HStack
					py={4}
					px={3}
					fontWeight="semibold"
					fontSize="lg"
					spacing="24px"
				>
					<IconButton 
						aria-label="changeSidebarSize"
						fontSize="20px"
						border="none"
						fontWeight="semibold"
						variant="outline"
						onClick={()=>setOpen(!isOpen)}
						icon={<HamburgerIcon/>
						}	
					>
						
					</IconButton>
					{isOpen&&
						<Box >
							Sample
						</Box>
					}
				</HStack>
				<VStack py={5}>
					{router_list.map((item)=><SidebarList {...item} isActive={isActivePath(item.to)} isOpen={isOpen} />)}
				</VStack>
			</Flex>
		</>
	)
	
}
