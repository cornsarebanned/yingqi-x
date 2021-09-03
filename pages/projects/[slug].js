import { createClient } from "contentful";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Link from "next/link";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "projects",
  });
  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
};

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: "projects",
    "fields.slug": params.slug,
  });

  return {
    props: { projects: items[0] },
  };
}

export default function ProjectDetails({ projects }) {
  console.log(projects);
  const { featuredImage, title, url, description, type } = projects.fields;

  return (
    <div className="slug-body">
      <div className="slug-inner">
        <div className="banner">
          <Image
            src={"https:" + featuredImage.fields.file.url}
            // width={featuredImage.fields.file.details.image.width}
            // height={featuredImage.fields.file.details.image.height}
            width={650}
            height={550}
            alt={type}
          />
          <h2>{title}</h2>
          <div>
            <Link href={url}>
              <a className="slug-url">{url}</a>
            </Link>
          </div>
        </div>

        <div className="method">
          <h3>Description:</h3>
          <div className="desc-msg">
            {documentToReactComponents(description)}
          </div>
        </div>
        <div className="back-btn-container">
          <Link href="/projects">
            <a className="back-btn">Back to Projects</a>
          </Link>
        </div>
      </div>

      <style jsx>
        {`
          .slug-body {
            display: flex;
            justify-content: center;
          }

          .slug-inner {
            width: 80%;
            padding: 3rem 0 5rem 0;
          }

          h2 {
            text-transform: uppercase;
            color: var(--global-color-secondary-bluegrey);
          }

          .slug-url {
            text-decoration: underline;
            color: #767676;
          }

          .slug-url:hover {
            text-decoration: none;
            cursor: pointer;
            background: linear-gradient(90deg, #4b6cb7 0%, #182848 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          h3 {
            var(--global-color-secondary-bluegrey);
            text-transform: uppercase;
          }

          .desc-msg{
            color: #182848;
          }

          .back-btn-container{
            margin-top: 3rem;
          }

          .back-btn {
            font-size: 0.98rem;
            letter-spacing: 0.15px;
            color: grey;
          }

          .back-btn:hover {
            color: #343346;
          }
        `}
      </style>
    </div>
  );
}
