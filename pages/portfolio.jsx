

import { GraphQLClient, gql } from 'graphql-request'
import React from 'react'
import Card from '../components/BlogCard/Card'

const graphcms = new GraphQLClient('https://api-us-west-2.hygraph.com/v2/clcd18see41v801uh8n0531pn/master')
const QUERY = gql`
{
    posts {
        id
        title
        tags
        slug
        date
        content
        coverImage{
            url
        }
    }
}
`

export async function getStaticProps(){
     const {posts} = await graphcms.request(QUERY)
     return {
        props: {
            posts,
        },
        revalidate: 10,
     }
}


const Portfolio = ({posts}) => {
    const [search, setSearch] = React.useState('')
    const onChangeSearch = (event) => {
        setSearch(event.target.value)
    }
    
    return (
        <div>
            <div className='container mt-10'>
                <div>
                    <input 
                        className="block sm:w-[400px] mx-auto rounded-3xl px-5 py-3 text-sm outline-none border bg-transparent" 
                        onChange={onChangeSearch} 
                        value={search} 
                        type="text" 
                        placeholder='Поиск'
                    />
                </div>
                { posts.filter((post) => post.content.toLowerCase().includes(search.toLowerCase())).map((post) => (
                    <Card
                        title={post.title} 
                        date={post.date}
                        coverImage={post.coverImage} 
                        key={post.id} 
                        slug={post.slug}
                        excerpt={post.excerpt}
                        tags={post.tags}
                        content={post.content}
                    /> 
                )) }
            </div>
        </div>
    )
}

export default Portfolio