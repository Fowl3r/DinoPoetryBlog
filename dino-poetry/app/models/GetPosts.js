export default async function getPosts(){
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