import { useRouter } from "next/router"
import {BaseLayout} from "@/components/templates/layouts/BaseLayout"
import { useArticleQuery } from "@/graphql/client";
import { isArray } from "util";
export default function Article(){
	const router = useRouter()
	const {id} = router.query;
	const articleId = Array.isArray(id)? id.join(""): id;
	const article= useArticleQuery({variables:{id:articleId}})
	return (
		<>
			<BaseLayout>
				<div>
					{id}
				</div>
			</BaseLayout>
		</>
	)
}
