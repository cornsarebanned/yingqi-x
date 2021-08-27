import { createClient } from 'contentful';
import Image from 'next/image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Link from 'next/link';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({ 
    content_type: "projects"
  })
  const paths = res.items.map(item => {
    return {
      params: { slug: item.fields.slug }
    }
  })

  return{
    paths: paths,
    fallback: false
  }
}

export async function getStaticProps({params}){
  const {items} = await client.getEntries({
    content_type: 'projects',
    'fields.slug' : params.slug
  })

  return{
    props: {projects:items[0]}
  }

}

export default function ProjectDetails({projects}){
  console.log(projects);
  const { featuredImage, title, url, description, type} = projects.fields

  return (
    <div className="slug-body">
      <div className="slug-inner">
      <div className="banner">
        <Image 
          src={'https:' + featuredImage.fields.file.url}
          // width={featuredImage.fields.file.details.image.width}
          // height={featuredImage.fields.file.details.image.height}
          width= {650}
          height= {550}
          alt={type}
        />
          <h2>{ title }</h2>
          <Link href="{url}" passHref target = "_blank"><a className="slug-url">{url}</a></Link>
      </div>

      <div className="method">
        <h3>Description:</h3>
        <div>{documentToReactComponents(description)}</div>
      </div>
    </div>
      <style jsx>{`
        .slug-body{
          display: flex;
          justify-content: center;
        }

        .slug-inner{
          width: 80%;
          padding: 3rem 0 5rem 0;
        }

        h2{
          text-transform: uppercase;
          font-family: 'Lora', serif;
          color: #343346;
        }

        .slug-url{
          text-decoration: underline;
          color: #767676;
          font-family: 'Lora', serif;
          text-transform: uppercase;
        }

        .slug-url:hover{
          text-decoration: none;
          cursor: pointer;
          color: #343346;
        }

        h3{
          font-family: 'Lora', serif;
          color: #343346;
          text-transform: uppercase;
        }

      `}
      </style>

      
    </div>
  )
}
