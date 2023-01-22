import Card from "../components/BlogCard/Card";
import Form from "../sections/Form";
import Hero from "../sections/Hero";
import Price from "../sections/Price";
import Skills from "../sections/Skills";
import { GraphQLClient, gql } from 'graphql-request'
import React from 'react'
import Button from "../components/Button";
import { useRouter } from "next/router";

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


export default function Home({posts}) {
  const router = useRouter()
  return (
    <>
      <div className="container">
        <Hero/>
        <Skills/>
      </div>

      <section className=" bg-[#09071c]">
        <div className="mt-10 container py-10">
          <h1 className="text-4xl font-bold text-center text-white">My works</h1>
          {
            posts.slice(0,3).map((post) => (
              <Card
                  title={post.title} 
                  date={post.date}
                  coverImage={post.coverImage} 
                  key={post.id} 
                  slug={post.slug}
                  tags={post.tags}
                  content={post.content}
              /> 
            ))
          }
          <div className="flex justify-center">
            <Button onClick={(e) => router.push('/portfolio')} className="bg-primary-blue text-white px-6 mr-5">Full portfolio</Button>
          </div>
        </div>
      </section>

      <div className="container">
        <Price/>
        <Form 
          title="Form"
          dark={true}
          id="form"
        />
      </div>
    </>
  )
}

// export async function getServerSideProps(){
//   await new Promise((resolve) => {
//     setTimeout(1000)
//   })
//   return {
//     props: {}
//   }
// }