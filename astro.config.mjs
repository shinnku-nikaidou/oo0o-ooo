// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

import mdx from "@astrojs/mdx";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import remarkToc from "remark-toc";

// https://astro.build/config
export default defineConfig({
  site: "https://oo0o.ooo",
  compressHTML: true,
  markdown: {
    remarkPlugins: [remarkMath, remarkToc],
    rehypePlugins: [
      [
        rehypeKatex,
        {
          macros: {
            "\\d": "\\mathrm{d}",
            "\\E": "\\mathbb{E}",
            "\\C": "\\mathbb{C}",
            "\\R": "\\mathbb{R}",
            "\\N": "\\mathbb{N}",
            "\\Q": "\\mathbb{Q}",
            "\\bigO": "\\mathcal{O}",
            "\\abs": "|#1|",
            "\\set": "\\{ #1 \\}",
            "\\indep": "{\\perp\\mkern-9.5mu\\perp}",
            "\\nindep": "{\\not\\!\\perp\\!\\!\\!\\perp}",
            "\\latex": "\\LaTeX",
            "\\katex": "\\KaTeX",
          },
        },
      ],
    ],
  },
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: ["oo0o.ooo", "localhost"],
    },
  },

  integrations: [
    react(),
    mdx({
      remarkPlugins: [remarkMath, remarkToc],
      rehypePlugins: [
        [
          rehypeKatex,
          {
            macros: {
              "\\d": "\\mathrm{d}",
              "\\E": "\\mathbb{E}",
              "\\C": "\\mathbb{C}",
              "\\R": "\\mathbb{R}",
              "\\N": "\\mathbb{N}",
              "\\Q": "\\mathbb{Q}",
              "\\bigO": "\\mathcal{O}",
              "\\abs": "|#1|",
              "\\set": "\\{ #1 \\}",
              "\\indep": "{\\perp\\mkern-9.5mu\\perp}",
              "\\nindep": "{\\not\\!\\perp\\!\\!\\!\\perp}",
              "\\latex": "\\LaTeX",
              "\\katex": "\\KaTeX",
            },
          },
        ],
      ],
    }),
  ],
});
