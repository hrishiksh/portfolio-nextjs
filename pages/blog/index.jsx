import fs from "fs";
import path from "path";
import BlogTile from "../../components/BlogTile";
import Link from "next/link";
import Nav from "../../components/nav";
import { NextSeo } from "next-seo";
import Footer from "../../components/Footer";
import { postFilePaths, POSTS_PATH } from "../../utils/mdxUtils";
import matter from "gray-matter";

const Blog = ({ sortedPosts }) => {
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
      />
      <div className="max-w-screen-lg mx-4 sm:mx-auto my-2 sm:my-6">
        <Nav />
        <main className="py-4 sm:py-10">
          <section className="mx-auto mb-14 mt-6 sm:mt-10 sm:mb-28">
            <p className="font-sriracha text-xl text-custom-yellow text-center">
              Blog
            </p>
            <h1 className="font-inter font-extrabold text-3xl sm:text-5xl text-center pt-4 dark:text-white">
              Documentation of my experiences
            </h1>
          </section>

          <div className="sm:grid sm:grid-cols-2 sm:gap-10">
            {sortedPosts.map((article) => (
              <Link
                href={`/blog/${article.data.slug}`}
                key={article.data.title}
              >
                <a>
                  <BlogTile
                    title={article.data.title}
                    thumbnail={article.data.hero}
                    author={article.data.author}
                    date={article.data.updated}
                  />
                </a>
              </Link>
            ))}
          </div>
        </main>
        <Footer />
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

  const sortedPosts = posts
    .sort(function (a, b) {
      const date1 = new Date(a.data.updated);
      const date2 = new Date(b.data.updated);
      return date1 - date2;
    })
    .reverse();

  return { props: { sortedPosts } };
};
