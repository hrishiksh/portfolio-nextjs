import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Chips from "../../components/Chips";
import { components } from "../../utils/mdxComponentStyle";
import { NextSeo } from "next-seo";
import Nav from "../../components/nav";
import { postFilePaths, POSTS_PATH } from "../../utils/mdxUtils";
import path from "path";

const BlogPost = ({ source, data }) => {
  return (
    <>
      <NextSeo
        title={data.seoTitle}
        description={data.seoDescription}
        canonical={`https://hrishikeshpathak.com/blog/${data.slug}`}
        openGraph={{
          title: data.socialTitle,
          description: data.socialDescription,
          type: "article",
          url: `https://hrishikeshpathak.com/blog/${data.slug}`,
          article: {
            publishedTime: data.created,
            modifiedTime: data.updated,
            authors: [data.author],
            tags: data.categories.split(",").map((value) => value),
          },
          images: [
            {
              url: data.hero,
              width: 768,
              height: 432,
              alt: data.title,
              type: "image/webp",
            },
          ],
          site_name: "Hrishikesh Pathak",
        }}
        twitter={{
          handle: "@hrishikshpathak",
          site: "@hrishikshpathak",
          cardType: "summary_large_image",
        }}
        additionalLinkTags={[
          {
            rel: "icon",
            href: "/images/favicon.webp",
          },
          {
            rel: "apple-touch-icon",
            href: "/images/favicon.webp",
            sizes: "70x70",
          },
          {
            rel: "preconnect",
            href: "https://fonts.gstatic.com",
          },
          {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/css2?family=Inconsolata&family=Inter:wght@400;500;600;700&family=Sriracha&display=swap",
          },
        ]}
      />

      <div className="max-w-screen-md mx-4 sm:mx-auto my-2 sm:my-6">
        <Nav />
        <main className="max-w-screen-md sm:mx-auto my-4 sm:my-8">
          <h1 className="font-inter font-bold text-3xl sm:text-4xl sm:font-extrabold py-6 dark:text-white">
            {data.title}
          </h1>
          <div className="flex mb-8 w-full">
            {data.categories.split(",").map((value) => (
              <Chips key={value} title={value} />
            ))}
          </div>
          <img className="pb-4" src={data.hero} alt={data.title} />
          <MDXRemote {...source} components={components} />
        </main>
        <footer></footer>
      </div>
    </>
  );
};

export default BlogPost;

export const getStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      data: data,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ""))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
