import {  useArticlesQuery } from '@/graphql/client'
import {TaskCard} from "@/components/organisms/cards/TaskCard"
import {BaseGrid} from "@/components/molecules/grids/BaseGrid"

export const ArticleWindow = ()=>{
	const {data,loading,error} = useArticlesQuery({variables:{userId:"sample-1"}})
	if(loading) return <div>Loading</div>;
	if(error) return <div>{error.message}</div>
	else {
		return (
			<BaseGrid>
				{data.articles.map(article=>
					<TaskCard id={article.id} title={article.title} thumbnail={article.thumbnail}/>
				)}
			</BaseGrid>
		)
	}
}
