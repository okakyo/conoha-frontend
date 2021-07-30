import {Flex,Box,Button,Stack,FormControl,FormLabel,Input,Checkbox,Link} from "@chakra-ui/react";

export default function Signup(){
	return (
		<>
			<Flex
				minH={'100vh'}
				align={'center'}
				justify={'center'}
			>
				<Box
					rounded={'lg'}
					boxShadow={'lg'}
					bgColor={'gray.50'}
					p={8}
				>
				<Stack spacing={4}>
					<FormControl id="email">
						<FormLabel>Email address</FormLabel>
						<Input type="email" />
					</FormControl>
					<FormControl id="password">
						<FormLabel>Password</FormLabel>
						<Input type="password" />
					</FormControl>
					<Stack spacing={10}>
						<Stack
							direction={{ base: 'column', sm: 'row' }}
							align={'start'}
							justify={'space-between'}
						>
							<Checkbox>Remember me</Checkbox>
							<Link color={'blue.400'}>Forgot password?</Link>
						</Stack>
						<Button
							bg={'blue.400'}
							color={'white'}
							_hover={{
							bg: 'blue.500',
							}}>
							Sign in
						</Button>
					</Stack>
				</Stack>
			</Box>
		</Flex>
		</>
	)
}
