import Image from 'next/image';
import Link from 'next/link';

export default function Card({project}) {
    const {title, type, slug, date, url, thumbnail} = project.fields

     return(
        <div className="card">
            <div className="thumbnail">
                <Image src={'https:' + thumbnail.fields.file.url}
                    // width={thumbnail.fields.file.details.image.width}
                    // height={thumbnail.fields.file.details.image.height}
                    width= {370}
                    height= {360}
                    alt={type}
                />
            </div>
            <div className="card-content">
                <div className="info">
                    <Link href="{url}" passHref target = "_blank"><a className="card-title">{title}</a></Link>
                    <br />
                    <em className="card-type">{type}</em>
                    <h5>Completed On : { date }</h5>
                </div>
                <div className="actions">
                    <Link href={'/projects/' + slug}><a className="card-btn">Learn More</a></Link>
                </div>
            </div>
        </div>
    )
}

