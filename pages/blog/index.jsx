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
          href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400&family=PT+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="max-w-screen-sm mx-auto my-8">
        <Nav />
        <main className="mx-4 sm:max-w-screen-lg sm:w-full  sm:m-auto sm:my-12 sm:grid sm:grid-cols-2 sm:gap-12">
          {posts.map((article) => (
            <Link href={`/blog/${article.Slug}`} key={article.Title}>
              <a>
                <BlogTile
                  description={article.Description}
                  title={article.Title}
                  author={article.authors[0].Name}
                  authorImg={article.authors[0].Image.formats.thumbnail.url}
                />
              </a>
            </Link>
          ))}
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
