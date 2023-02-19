import Link from "next/link";
import DeletePost from "./DeletePost";

export async function getPosts(){
    const res = await fetch('http://127.0.0.1:8090/api/collections/posts/records?page=1&perPage=10',
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
    <div>
    <h1>posts</h1>
    <div>   
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
                <h2 className='card-title'>{title}</h2>
                <h5 className='card-body'>{body}</h5>
                <p>{category}</p>
                <p>{created}</p>
                <p>{updated}</p>
                </Link>
                <DeletePost post={post}   />
                {/* <button
                onClick={() => {removePost(post.id)}}
                >Delete</button> */}
            </div>
       
    )
}