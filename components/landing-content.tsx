"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
    {
        name: "Vu",
        avatar: "V",
        title: "Software Engineer",
        description: "I was amazed by how the AI tool streamlined my workflow! It quickly generated accurate reports, saving me hours of manual work. This tool is a game-changer for productivity."
    },
    {
        name: "John",
        avatar: "J",
        title: "Product Manager",
        description: "I'm not a tech-savvy person, but using this AI tool was incredibly intuitive. It transformed complex data into easy-to-understand visuals, enabling me to make informed decisions without any hassle."
    },
    {
        name: "Kathy",
        avatar: "K",
        title: "Product Designer",
        description: "Being in the creative industry, inspiration can be elusive. This AI tool sparked my creativity with its innovative suggestions and ideas. It feels like collaborating with an artistic partner."
    },
    {
        name: "Jimmy",
        avatar: "J",
        title: "Software Engineer",
        description: "I've tried several AI tools before, but none were as versatile as this one. From content generation to data analysis, it handles a wide range of tasks with impressive accuracy. It's like having a multi-talented virtual assistant."
    },
]

export const LandingContent = () => {
    return (
        <div className="px-10 pb-20">
            <h2 className="text-center text-4xl text-white font-extrabold mb-10">
                Testimonials
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {testimonials.map((item) => (
                    <Card key={item.description} className="bg-[#192339] border-none text-white">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-x-2">
                                <div>
                                    <p className="text-lg">
                                        {item.name}
                                    </p>
                                    <p className="text-zinc-400 text-sm">
                                        {item.title}
                                    </p>
                                </div>
                            </CardTitle>
                            <CardContent className="pt-4 px-0">
                                {item.description}
                            </CardContent>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </div>
    )
}