import { html, htmlToResponse } from "mastro";
import { Layout } from "../components/Layout.js";

export const GET = () =>
  htmlToResponse(
    Layout({
      title: 'News',
      children: html`
        <p>Once we have news, we'll let you know here.</p>
        `
    })
  );