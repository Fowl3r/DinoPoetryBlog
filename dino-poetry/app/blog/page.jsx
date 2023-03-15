
import Link from "next/link";
import DeletePost from "./DeletePost";
import DisplayRichText from "../components/DisplayRichText";
/* 
PLAN:
- use different instance of editor to display
read only version of rich text,
 then conditionally render
an edit button if admin is logged in which then renders
editable version of text, 
*/

export async function getPosts(){
    const URL = process.env.NEXT_PUBLIC_PB_URL
    const res = await fetch(`${URL}?page=1&perPage=10`,
    {cache: 'no-store'}
);
//    next will cache this as link is not dynamic so need this to make sure fetch is sent for every request
// like getServerSideProps
    const data = await res.json();
    console.log(data.items)
    return data?.items;
}

export default async function BlogPage() {
    const posts = await getPosts();
 
    return (
    <div className='blog-display'>
    <h1>posts</h1>
    <div className="card-holder">   
    {posts?.map((post) => {
        return <PostCard key={post.id} post={post} />;
    })
    }
    </div>
    </div>
  )
}

function PostCard({post}) {
    const {id, title, body, category,created, updated} = post
    return (

            <div className='card'>
        <Link href={`/blog/${id}`}>
                <h2 className='text-white card-title'>{title}</h2>
                {/* <h3 className="card-body">{JSON.stringify(body)}</h3> */}
                <DisplayRichText className='bg-white' body={body} />
                <p className='card-category'>{category}</p>
                <div className='timestamps'>
                <p>{created}</p>
                <p>{updated}</p>
                </div>
                </Link>
                <DeletePost post={post}   />
                {/* <button
                onClick={() => {removePost(post.id)}}
                >Delete</button> */}
            </div>
       
    )
}