import { useRouter } from "next/router"
import {BaseLayout} from "@/components/templates/layouts/BaseLayout"
import { useArticleQuery } from "@/graphql/client";
import { Divider, Heading,Text,Box } from "@chakra-ui/react";
export default function Article(){
	// query の処理
	const router = useRouter()
	const {id} = router.query;
	const articleId = Array.isArray(id) ? id.join("") : id;
	
	// GraphQL の処理
	const {loading,error,data } = useArticleQuery({ variables: { id: articleId } })
	if (loading) return (<BaseLayout>loading...</BaseLayout>)
	if (error) return (<BaseLayout>{error.message}</BaseLayout>)
	const article = data.article
	// View 管理
	return (
		<>
			<BaseLayout>
				<Box
					p={3}
					borderRadius="md"
					borderWidth="1px"
				>
					<Heading as="h3" size="lg">
					{article.title}
					</Heading>
					<Box
						p = {1}
					>
					<Text>
						{article.description}
					</Text>
					<Divider/>
					<Text>
						{article.content}
					</Text>
					</Box>
					</Box>
				
				
			</BaseLayout>
		</>
	)
}
