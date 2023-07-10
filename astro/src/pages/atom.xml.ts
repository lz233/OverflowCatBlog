import rss from "@astrojs/rss";
import { posts } from "@/scripts/collection-workaround";

export function get(context: any) {
  return rss({
    // `<title>` field in output xml
    title: "新世界的大门",
    // `<description>` field in output xml
    description: "因此幻想是世界，谁若懂得，谁就会歌唱",
    // Pull in your project "site" from the endpoint context
    // https://docs.astro.build/en/reference/api-reference/#contextsite
    site: context.site,
    // Array of `<item>`s in output xml
    // See "Generating items" section for examples using content collections and glob imports
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.desc,
      // customData: post.data.customData,
      // Compute RSS link from post `slug`
      // This example assumes all posts are rendered as `/blog/[slug]` routes
      link: `/${post.slug}/`,
      content: post.body,
    })),
    // (optional) inject custom xml
    customData: `<language>zh-cn</language>`,
  });
}
