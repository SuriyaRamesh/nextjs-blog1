// import { createPost } from "@/actions/actions";
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
                        <Link href={`/posts/${post.id}`} className="text-blue-500 hover:underline">{post.title}</Link>
                    </li>
                ))}
            </ul>

            {/* Form to submit a post - Post method */}
            {/* Tradition way of adding a post */}
            {/* <form onSubmit={() => {
                fetch('/api/posts',{
                    method: 'POST',
                    body: JSON.stringify({
                        title: 'New Post',
                        content: 'This is the content of the new post.'
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                } )
            }} className="max-w-[400px] mx-auto mt-24 mb-10">
                <input type="text" placeholder="Title" className="border p-2 mb-2 w-full" />
                <textarea placeholder="Content" className="border p-2 mb-2 w-full"></textarea>
                <button type="submit" className="bg-blue-500 text-white px-3 py-1 rounded-md">Create post</button>
            </form> */}

            {/* In next js - this can be done with server actions */}

             {/* <form action={createPost} className="max-w-[400px] mx-auto mt-24 mb-10">
                <input type="text" placeholder="Title" className="border p-2 mb-2 w-full" name="title" />
                <textarea placeholder="Content" className="border p-2 mb-2 w-full" name="content"></textarea>
                <button type="submit" className="bg-blue-500 text-white px-3 py-1 rounded-md">Create post</button>
            </form> */}
        </div>
    )
}