import { getCollection } from "astro:content";
import createSlug from "../lib/createSlug";
import { publications } from "../content/publications";

const staticPages = [
  "/",
  "/blog/",
  "/cv/",
  "/news/",
  "/projects/",
  "/publications/",
  "/services/",
  "/store/",
];

const formatUrl = (siteUrl, path) => new URL(path, siteUrl).href;

const escapeXml = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");

export async function GET(context) {
  const siteUrl = context.site?.href ?? "https://mfranck340.github.io/";
  const blog = await getCollection("blog");
  const store = await getCollection("store");

  const urls = [
    ...staticPages,
    ...blog.map((post) => `/blog/${createSlug(post.data.title, post.slug)}/`),
    ...store.map((item) => `/store/${item.slug}/`),
    ...publications.map((publication) => `/publications/${publication.slug}/`),
  ];

  const uniqueUrls = Array.from(new Set(urls.map((path) => formatUrl(siteUrl, path))));
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${uniqueUrls.map((url) => `  <url><loc>${escapeXml(url)}</loc></url>`).join("\n")}
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
