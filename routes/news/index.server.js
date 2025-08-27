import { html, htmlToResponse, readMarkdownFiles } from "mastro";
import { Layout } from "../../components/Layout.js";

export const GET = async () => {
  const posts = await readMarkdownFiles("data/posts/*.md");
  return htmlToResponse(
    Layout({
      title: "News",
      children: posts.map((post) =>
        html`
          <p>
            <a href="${"/news" + post.path.slice(11, -3)}/">
              ${post.meta.title}
            </a>
          </p>
        `
      ),
    }),
  );
};