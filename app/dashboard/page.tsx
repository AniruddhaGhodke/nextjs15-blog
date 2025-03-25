import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { prisma } from "../utils/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import BlogPostCard from "@/components/general/BlogPostCard";

const getData = async () => {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    if (!user?.id) {
        return []; // Return an empty array instead of causing an error
    }

    const data = await prisma.blogPost.findMany({
        where: {
            authorId: user.id,
        },
        orderBy: {
            createdAt: "desc",
        },
    });

    return data;
};

const DashboardRoute = async () => {
    const data = await getData();
    return (
        <div>
            <div className="flex items-center justify-between my-4 lg:my-8">
                <h2 className="text-xl font-medium">Your Blog Articles</h2>

                <Link href="/dashboard/create" className={buttonVariants()}>
                    Create Post
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {data.map((post) => (
                    <BlogPostCard key={post.id} data={post} />
                ))}
            </div>
        </div>
    );
};

export default DashboardRoute;
