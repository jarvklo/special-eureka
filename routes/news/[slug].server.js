import { getParams, htmlToResponse, readDir, readMarkdownFile } from "mastro";
import { Layout } from "../../components/Layout.js";

export const GET = async (req) => {
  const { slug } = getParams(req.url);

  const post = await readMarkdownFile(`data/posts/${slug}.md`);
  return htmlToResponse(
    Layout({
      title: post.meta.title,
      children: post.content,
    })
  );
}

export const getStaticPaths = async () => {
  const posts = await readDir("data/posts/");
  return posts.map(p => "/news/" + p.slice(0, -3) + "/");
}