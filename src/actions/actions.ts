"use server";

import { revalidatePath } from "next/cache";

// import { Prisma } from "@/lib/db";

// export async function createPost(formData: FormData) {
//     const title = formData.get("title");
//     const content = formData.get("content");

//     await Prisma.post.create({data: { title, content}})

        // powerful feature of server actions (without reloading the page we can see the updated data)
        revalidatePath("/posts");
// }