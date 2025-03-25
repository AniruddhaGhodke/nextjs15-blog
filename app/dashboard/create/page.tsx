import { handleSubmit } from "@/app/actions";
import Submitbutton from "@/components/general/Submitbutton";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const CreateBlogRoute = () => {
    return (
        <div>
            <Card className="max-w-lg lg:max-w-xl mx-auto mt-8">
                <CardHeader>
                    <CardTitle>Create Post</CardTitle>
                    <CardDescription>
                        Create a new post to share with the world
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form className="grid gap-4" action={handleSubmit}>
                        <div className="grid gap-2">
                            <Label>Title</Label>
                            <Input
                                name="title"
                                required
                                type="text"
                                placeholder="Title"
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label>Content</Label>
                            <Textarea
                                name="content"
                                required
                                placeholder="Content"
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label>Image URL</Label>
                            <Input
                                name="url"
                                required
                                type="url"
                                placeholder="URL"
                            />
                        </div>
                        <Submitbutton />
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default CreateBlogRoute;
