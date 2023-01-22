import { GraphQLClient, gql } from 'graphql-request'
import React from 'react' 
import s from './slug.module.css'


const graphcms = new GraphQLClient('https://api-us-west-2.hygraph.com/v2/clcd18see41v801uh8n0531pn/master')
const QUERY = gql`
 query Post($slug: String!) {
    post(where: {slug: $slug}) {
        id,
        title,
        slug,
        tags,
        date,
        content,
        contentText {
            html
        }
        coverImage{
            id,
            url
        }
    }
 }
`

const SLUGLIST = gql`
 {
    posts {
        slug
    }
 }
`

export async function getStaticPaths() {
    const {posts} = await graphcms.request(SLUGLIST)
    return {
        paths: posts.map((post) => ({params: {slug: post.slug}})),
        fallback: false
    }
}

export async function getStaticProps({params}){
     const slug = params.slug
     const data = await graphcms.request(QUERY, {slug})
     const post = data.post
     return {
        props: {
            post,
        },
        revalidate: 10,
     }
}

export default function BlogPost({post}) {
    return (
        <div>
            <div className='container'>
                <div>
                    <title>{post.title}</title>
                    <meta name='description' content={post.excerpt} />
                </div>
                <h1 className='text-3xl font-bold mb-5 mt-20'>{post.title}</h1>
                <div className={s.articles_text} dangerouslySetInnerHTML={{ __html: post.contentText.html }}>
                    
                </div>
            </div>
        </div>
    )
}