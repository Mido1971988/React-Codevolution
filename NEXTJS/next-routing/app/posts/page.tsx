import Link from "next/link"

export default async function PostList() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const postsList : [{ id : string , title : string}]  = await response.json()
    const threePosts = postsList.slice(0,3)
    return (
        <>
            <h1>List of Posts</h1>
            {threePosts.map(post => {
                return (
                <div key={post.id}>
                    <p>{post.id}</p>
                    <Link href={`posts/${post.id}`} >
                        <p>{post.title}</p>
                    </Link>
                </div>
                )
            })}
        </>
    )
}



