import { client } from "@/services/prismicClient";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const posts = await client.getAllByType("post")
    const postsEntries = posts.map((post) => ({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${post.uid}`,
        lastModified: post.last_publication_date,
        changeFrequency: "weekly",
    }))

    return [
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/contatos`,
            lastModified: new Date().toISOString(),
        },
        ...postsEntries as any
    ]

}