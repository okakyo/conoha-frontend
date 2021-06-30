import {VFC, useState,createContext } from "react"

type props = {
	children:ChildNode
}

export const GlobalContext = createContext({})

export const GlobalProvider:VFC<props> = ({children})=>{
	const [user,setUser] = useState(null)
	return (
		<GlobalContext.Provider value={{
			user,setUser,
		}}>
			{children}
		</GlobalContext.Provider>
	)
}
