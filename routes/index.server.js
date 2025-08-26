import { html, htmlToResponse } from "mastro";
import { Layout } from "../components/Layout.js";

export const GET = () =>
  htmlToResponse(
    Layout({
      title: "Hello World",
      children: html`
        <p>Hello World</p>
      `,
    }),
  );
