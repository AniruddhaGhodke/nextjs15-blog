"use server";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { prisma } from "./utils/db";
import { redirect } from "next/navigation";

export const handleSubmit = async (formData: FormData) => {
    const {getUser} =  getKindeServerSession();
    const user = await getUser();
    
    if (!user) {
        return redirect("/api/auth/register");
    }

    await prisma.blogPost.create({
        data: {
            title: formData.get("title") as string,
            content: formData.get("content") as string,
            imageUrl: formData.get("url") as string,
            authorId: user?.id as string,
            authorName: user?.given_name as string,
            authorImage: user?.picture as string,
        }
    });
    return redirect("/dashboard");
};