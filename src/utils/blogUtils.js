import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

export async function getPost(slug, locale) {
  let fileSlug = slug;
  if (locale === "it") {
    fileSlug = `IT-${slug}`;
  } else if (locale === "de") {
    fileSlug = `DE-${slug}`;
  }

  const filePath = join(process.cwd(), "src", "lib", "courses", `${fileSlug}.md`);
  const text = await readFile(filePath, "utf8");
  const {
    content,
    data: { title, seo_title, seo_description, thumbnail, poster_desc, poster_mobile, back_desc, back_mobile },
  } = matter(text);
  const body = marked(content);
  return { slug: fileSlug, title, seo_title, seo_description, thumbnail, poster_desc, poster_mobile, back_desc, back_mobile, body };
}

export async function getSlugs() {
  const dirPath = join(process.cwd(), "src", "lib", "courses");
  const files = await readdir(dirPath);
  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.slice(0, -".md".length));
}


export async function getPage(slug, locale) {
  let fileSlug = slug;
  if (locale === "it") {
    fileSlug = `IT-${slug}`;
  } else if (locale === "de") {
    fileSlug = `DE-${slug}`;
  }

  const filePath = join(process.cwd(), "src", "lib", "policies", `${fileSlug}.md`);
  const text = await readFile(filePath, "utf8");
  const {
    content,
    data: { title, date },
  } = matter(text);
  const body = marked(content);
  return { slug: fileSlug, title, date, body };
}

export async function getPageSlugs() {
  const dirPath = join(process.cwd(), "src", "lib", "policies");
  const files = await readdir(dirPath);
  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.slice(0, -".md".length));
}