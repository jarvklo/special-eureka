import { html, htmlToResponse } from "mastro";
import { Layout } from "../components/Layout.js";

export const GET = () =>
  htmlToResponse(
    Layout({
      title: 'News',
      children: html`
        <p>Once we have some news, we'll let you know here.</p>
        `
    })
  );