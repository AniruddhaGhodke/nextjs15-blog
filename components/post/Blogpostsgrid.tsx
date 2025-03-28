import { Skeleton } from "../ui/skeleton";

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
