import { Container} from "@chakra-ui/react";
import {VFC,ReactChild} from "react";

type BaseGridType = {
	children: ReactChild
}

export const BaseGrid:VFC<BaseGridType>  = ({children})=>{
	return (
		<>
			<Container 
				maxW="container.md"
			>
				{children}
			</Container>
		</>
	)
}
