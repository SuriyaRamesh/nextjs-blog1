// import { prisma } from "@/lib/db"; // Import your Prisma client

import UpvoteBtn from "@/components/upvote-btn";
import { notFound } from "next/navigation";

export default async function Page({ params } : {params: Promise<{id: string}>}) { 

    const id = (await params).id;

    // Retrive the specific post from the api
    const data = await fetch(`https://dummyjson.com/posts/${id}`);
    const post = await data.json();

    if(!post.title && !post.body) {
        return notFound();
    }

    // Retrive the specific post from your own Database (using ORM Prisma here)
    // const post = await prisma.post.findUnique({
    //     where: {
    //         id: Number(id),   // casting id to a number
    //     },
    // });

    return (
        <div className="text-center pt-12">
            <h1 className="text-3xl capitalize font-bold mb-4">{post.title}</h1>
            <p className="whitespace-pre-wrap">{post.body}</p>

            {/* eg btn with user events to understand client components */}
            <UpvoteBtn />
        </div>
    );
}