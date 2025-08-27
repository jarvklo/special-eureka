import { html } from "mastro";
import { Header } from "./Header.js";
import { Footer } from "./Footer.js";

export const Layout = (props) =>
  html`
    <html>
      <head>
        <title>${props.title}</title>
        <link rel="stylesheet" href="/styles.css">
      </head>
      <body>
        ${Header()}

        <main>
          <pre>Hello</pre>
          ${props.children}
        </main>

        ${Footer()}
      </body>
    </html>
  `;