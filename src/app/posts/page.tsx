import Link from "next/link";

export default async function Page() {
    // Fetching data from an external API
    const response = await fetch("https://dummyjson.com/posts");
    const data = await response.json();
    console.log(data);

    // To get data from your own Database (using ORM Prisma here)
    // const posts = await prisma.post.findmany(); 

    return (
        <div className="text-center pt-12">
            <h1 className="text-3xl capitalize font-bold mb-4">Posts</h1>
            <ul>
                {data.posts.map((post: {id: number, title: string}) => (
                    <li key={post.id} className="mb-2">
                        {/* <a href={`/posts/${post.id}`} className="text-blue-500 hover:underline">
                            {post.title}
                        </a> */}
                        <Link href={`/posts/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}