import {createClient} from 'contentful';
import Card from '../components/Card';

export async function getStaticProps(){

    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    });

    const res = await client.getEntries({content_type:'eCommerceWebApplication'})

    return{
        props:{
            eCommerceWebApplication: res.items
        }
    }
}

export default function Projects({eCommerceWebApplication}){
    console.log(eCommerceWebApplication);
    return(
        <div className="projects-grid">
            {eCommerceWebApplication.map(webapp => (
                <Card key={webapp.sys.id} webapp={webapp} />
            ))}
        </div>
    );
}