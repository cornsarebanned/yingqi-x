import { createClient } from "contentful";
import Card from "../components/Card";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "projects" });

  return {
    props: {
      projects: res.items,
    },
  };
}

export default function Projects({ projects }) {
  console.log(projects);

  return (
    <div className="projects-grid">
        {projects.map(project => (
          <Card key={project.sys.id} project={project} />
        ))}
    </div>
  );
}
