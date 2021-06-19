import {VFC} from "react"
import {} from "@chakra-ui/react";
type CardProps = {
	children:ChildNode
}

export const WindowCard: VFC<CardProps> = ({children})=>{
	return (
		<>
		<div>
			{children}
		</div>
			
		</>
	)
}