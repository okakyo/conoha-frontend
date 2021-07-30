import {VFC, useState,createContext,  useContext } from "react"

export const UserContext = createContext({
	isOpen: true,
	isDark: false,
	setIsOpen: () => {},
	setIsDark: () => {}
})

export function useUserLocalContext() {
	return useContext(UserContext)
} 

export const UserLocalProvider = ({ children }) => {
	const [isOpen, setIsOpen] = useState(true)
	const [isDark, setIsDark] = useState(false)
	const changeIsOpen = () => {
		setIsOpen(!isOpen)
	}
	const changeIsDark = () => {
		setIsDark(!isDark)
	}
	const value = {
		isOpen,
		isDark,
		setIsOpen : changeIsOpen,
		setIsDark : changeIsDark
	}
	return (
		<UserContext.Provider value={value}>
			{children}
		</UserContext.Provider>
	)
}
