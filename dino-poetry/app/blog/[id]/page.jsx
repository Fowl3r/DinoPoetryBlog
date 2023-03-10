async function getPost(postId) {
    const res = await fetch(
        `https://dino-poetry.fly.dev/api/collections/posts/records/${postId}`,
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
            <h1>Post/{post.id}</h1>
            <div>
                <h3>{post.title}</h3>
                <h3>{post.body}</h3>
                <h3>{post.category}</h3>
            </div>
        </div>
    )
}