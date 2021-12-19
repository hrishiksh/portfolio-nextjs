import BlogTile from "../../components/BlogTile";
import Link from "next/link";
import Nav from "../../components/nav";
import { NextSeo } from "next-seo";

const Blog = ({ posts }) => {
  return (
    <>
      <NextSeo
        title="Blog | Hrishikesh Pathak"
        description="A documentation of my experiences. The living journel"
        canonical="https://hrishikeshpathak.com/blog/"
        openGraph={{
          title: "Blog | Hrishikesh Pathak",
          description: "A documentation of my experiences. The living journel",
          type: "website",
          url: "https://hrishikeshpathak.com/blog/",
          images: [
            {
              url: "/images/profilePicture.jpg",
              width: 768,
              height: 432,
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
            {posts.reverse().map((article) => (
              <Link href={`/blog/${article.Slug}`} key={article.Title}>
                <a>
                  <BlogTile
                    title={article.Title}
                    thumbnail={article.Banner.url}
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
  const response = await fetch(`${process.env.DOMAINNAME}/articles`);

  const posts = await response.json();

  return {
    props: {
      posts,
    },
    revalidate: 60,
  };
};
