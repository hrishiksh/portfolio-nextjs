import fs from "fs";
import path from "path";
import BlogTile from "../../components/BlogTile";
import Link from "next/link";
import Nav from "../../components/nav";
import { NextSeo } from "next-seo";
import { postFilePaths, POSTS_PATH } from "../../utils/mdxUtils";
import matter from "gray-matter";

const Blog = ({ posts }) => {
  return (
    <>
      <NextSeo
        title="Blog | Hrishikesh Pathak"
        description="A documentation of my experiences. The living journel"
        canonical="https://hrishikeshpathak.com/blog"
        openGraph={{
          title: "Blog | Hrishikesh Pathak",
          description: "A documentation of my experiences. The living journel",
          type: "website",
          url: "https://hrishikeshpathak.com/blog",
          images: [
            {
              url: "https://hrishikeshpathak.com/images/profilePicture.jpg",
              width: 480,
              height: 480,
              alt: "Image of hrishikesh Pathak",
              type: "image/jpeg",
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
            href: "https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700;800&family=Sriracha&display=swap",
          },
        ]}
      />
      <div className="max-w-screen-lg mx-4 sm:mx-auto my-2 sm:my-6">
        <Nav />
        <main>
          <section className="mx-auto mt-10 mb-14 sm:mt-20 sm:mb-28">
            <p className="font-sriracha text-xl text-custom-yellow text-center">
              Blog
            </p>
            <h1 className="font-inter font-extrabold text-3xl sm:text-5xl text-center pt-4 dark:text-white">
              Documentation of my experiences
            </h1>
          </section>

          <div className="sm:grid sm:grid-cols-2 sm:gap-10">
            {posts.map((article) => (
              <Link
                href={`/blog/${article.data.slug}`}
                key={article.data.title}
              >
                <a>
                  <BlogTile
                    title={article.data.title}
                    thumbnail={article.data.hero}
                  />
                </a>
              </Link>
            ))}
          </div>
        </main>
        <footer></footer>
      </div>
    </>
  );
};

export default Blog;

export const getStaticProps = async (context) => {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { data } = matter(source);
    return {
      data,
      filePath,
    };
  });

  return { props: { posts } };
};
