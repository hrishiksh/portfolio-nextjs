import BlogTile from "../../components/BlogTile";
import Head from "next/head";
import Link from "next/link";
import Nav from "../../components/nav";

// type JsonResponse = [
//   {
//     Slug: string;
//     SocialTitle: string;
//     SocialDescription: string;
//     Title: string;
//     Content: string;
//     SeoTitle: string;
//     Description: string;
//     SeoDescription: string;
//     published_at: string;
//     updatedAt: string;
//     Banner: {
//       alternativeText: string;
//       url: string;
//       formats: { thumbnail: { url: string } };
//     };
//     authors: [
//       {
//         Name: string;
//         Description: string;
//         Image: {
//           alternativeText: string;
//           url: string;
//           formats: { thumbnail: { url: string } };
//         };
//       }
//     ];
//     categories: [{ CategoryName: string }];
//   }
// ];

const Blog = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Devquark Blog</title>
        <link rel="icon" href="/icon.svg" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700;800&family=Sriracha&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="max-w-screen-lg mx-auto my-8">
        <Nav />
        <main>
          <section className="max-w-screen-sm mx-auto mt-20 mb-28">
            <p className="font-sriracha text-xl text-custom-yellow text-center">
              Blog
            </p>
            <h1 className="font-inter font-extrabold text-5xl text-center pt-4 dark:text-white">
              Documentation of my experiences
            </h1>
          </section>

          <div className="grid grid-cols-2 gap-10">
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
  const response = await fetch(
    "https://devquark-blog-production.herokuapp.com/articles"
  );

  const posts = await response.json();

  return {
    props: {
      posts,
    },
    revalidate: 60,
  };
};
