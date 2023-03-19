import DisplayRichText from "../../components/DisplayRichText";

async function getPost(postId) {
    const URL = process.env.NEXT_PUBLIC_PB_URL
    const res = await fetch(
        `${URL + '/' + postId}`,
        {
            // will revalidate data if older than 5 seconds
            next: {revalidate: 5},
        }
    );
        const data = await res.json()
    return data;
}

export default async function PostPage({params}){
    const post = await getPost(params.id);
    
    return (

            <div>
                <h1>{post.title}</h1>
                <DisplayRichText body={post.body} />
                <h3>{post.category}</h3>
            </div>
        
    )
}