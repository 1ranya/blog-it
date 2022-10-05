import { useRouter } from "next/router";
import type { NextPage, GetStaticPropsContext } from 'next';

interface Article {
    article: {
        id?: number,
        writer?: string,
        title?: string, 
        text?: string,
        createdDate?: Date,
        likes?: number
    }
}

type PageParams = {
    id: string
}

const Article: NextPage<Article> = ({article}) =>{
    const router = useRouter()
    const {id} = router.query
    console.log(article)
    console.log(router)
    return(
        <div>
            {article.title}
           <h1>{article.title}</h1>
           <p>{article.text}</p>
           <span>{article.writer}</span>
        </div>
    )
}

export async function getStaticPaths(){
    return {
        paths: [{ params: {id: '1'}}, {params: {id: '2'}}], 
        fallback: false,
    }
}

export const getStaticProps = async ({params}: GetStaticPropsContext<PageParams>) => {
    console.log('params ', params)
    const res = await fetch(`http://localhost:3000/${params?.id}.json`)
    const article = await res.json()

    return {
        props:{
            article,
        }
    }
}

export default Article;