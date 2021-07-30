import { SimpleGrid} from "@chakra-ui/react";
import {ReactNode, VFC} from "react";

type Props = {
	children:ReactNode
}
export const BaseGrid:VFC<Props>  = ({children})=>{
	return (
		<SimpleGrid
			columns={{base:1,sm:2,lg:3}}
			spacingX={4}
			spacingY={4}
		>
			{children}
		</SimpleGrid>
	)
}
