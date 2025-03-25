import { prisma } from "@/app/utils/db";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

const getData = async (id: string) => {
    const data = await prisma.blogPost.findUnique({
        where: {
            id: id,
        },
    });

    if (!data) {
        return notFound();
    }
    return data;
};

type Params = Promise<{ id: string }>;

const IDpage = async ({ params }: { params: Params }) => {
    const { id } = await params;
    const data = await getData(id);
    return (
        <div className="max-w-3xl mx-auto px-4 py-8">
            <Link
                className={buttonVariants({ variant: "secondary" })}
                href="/dashboard"
            >
                Back to dashboard
            </Link>

            <div className="my-8">
                <h1 className="text-3xl font-bold tracking-tight mb-4">
                    {data.title}
                </h1>
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                        <div className="relative size-10 overflow-hidden rounded-full">
                            <Image
                                src={data.authorImage}
                                alt="Author"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <p className="text-sm font-medium">{data.authorName}</p>
                    </div>
                    <p className="text-sm text-gray-500">
                        {new Date(data.createdAt).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })}
                    </p>
                </div>
            </div>

            <div className="relative h-[200px] lg:h-[400px] w-full mb-8 overflow-hidden rounded-lg">
                <Image
                    src={data.imageUrl}
                    alt={data.title}
                    fill
                    className="object-cover"
                    priority
                />
            </div>
            <Card>
                <CardContent>
                    <p className="text-lg text-gray-700">{data.content}</p>
                </CardContent>
            </Card>
        </div>
    );
};

export const BlogPostsGrid = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 6 }, (_, index) => (
                <div
                    key={index}
                    className="rounded-lg border bg-card text-card-foreground shadow h-[400px] flex flex-col overflow-hidden"
                >
                    <Skeleton className="h-48 w-full rounded-none" />

                    <div className="p-4 flex-1 flex flex-col gap-3">
                        <Skeleton className="h-6 w-3/4" />

                        <div className="space-y-2">
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-full" />
                        </div>

                        <div className="mt-auto flex items-center justify-between pt-4">
                            <div className="flex items-center">
                                <Skeleton className="h-8 w-8 rounded-full" />
                                <div className="ml-2">
                                    <Skeleton className="h-4 w-24" />
                                </div>
                                <Skeleton className="h-4 w-16 ml-auto" />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default IDpage;
