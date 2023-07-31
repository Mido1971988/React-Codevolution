export default async function PostId({params}: {params : { postId : string}}) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const post : { id : string , title : string , body : string}  = await response.json()
    return (
    <>
        <h1>{post.id}</h1>
        <h1>{post.title}</h1>
        <h1>{post.body}</h1>
    </>
    )
}