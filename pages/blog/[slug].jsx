import Head from "next/head";
import Chips from "../../components/Chips";
import { components } from "../../utils/mdxComponentStyle";
import { NextSeo } from "next-seo";
import gfm from "remark-gfm";
import ReactMarkdown from "react-markdown";
import Nav from "../../components/nav";

const BlogPost = ({ parsedResponse }) => {
  return (
    <>
      <NextSeo
        title={parsedResponse[0].SeoTitle}
        titleTemplate="%s | Devquark"
        description={parsedResponse[0].SeoDescription}
        canonical={`https://www.devquark.com/blog/${parsedResponse[0].Slug}`}
        openGraph={{
          title: parsedResponse[0].SocialTitle,
          description: parsedResponse[0].SocialDescription,
          type: "article",
          url: `https://www.devquark.com/blog/${parsedResponse[0].Slug}`,
          article: {
            publishedTime: parsedResponse[0].published_at,
            modifiedTime: parsedResponse[0].updatedAt,
            authors: [parsedResponse[0].authors[0].Name],
            tags: parsedResponse[0].categories.map(
              (value) => value.CategoryName
            ),
          },
          images: [
            {
              url: parsedResponse[0].Banner.url,
              width: 1280,
              alt: parsedResponse[0].Banner.alternativeText,
            },
          ],
          site_name: "Devquark",
        }}
        twitter={{
          handle: "@hrishikshpathak",
          site: "@hrishikeshpathak",
          cardType: "summary_large_image",
        }}
      />
      <Head>
        <link rel="icon" href="/icon.svg" />
        <link rel="apple-touch-icon" href="/icon.svg" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inconsolata&family=Inter:wght@400;500;600;700&family=Sriracha&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="max-w-screen-md mx-4 sm:mx-auto my-2 sm:my-8">
        <Nav />
        <main className="max-w-screen-md sm:mx-auto my-4 sm:my-8">
          <h1 className="font-inter font-bold text-3xl sm:text-4xl py-6 dark:text-white">
            {parsedResponse[0].Title}
          </h1>
          <div className="flex mb-8 w-full">
            {parsedResponse[0].categories.map((value) => (
              <Chips key={value.CategoryName} title={value.CategoryName} />
            ))}
          </div>
          <img
            className="pb-4"
            src={parsedResponse[0].Banner.url}
            alt={parsedResponse[0].Banner.alternativeText}
          />
          <ReactMarkdown
            children={parsedResponse[0].Content}
            remarkPlugins={[gfm]}
            components={components}
          />
        </main>
        <footer></footer>
      </div>
    </>
  );
};

export default BlogPost;

export const getStaticProps = async ({ params }) => {
  const response = await fetch(
    `${process.env.DOMAINNAME}/articles?Slug=${params.slug}`
  );

  const parsedResponse = await response.json();

  return {
    props: {
      parsedResponse,
    },
    revalidate: 60,
  };
};

export const getStaticPaths = async () => {
  const response = await fetch(`${process.env.DOMAINNAME}/articles`);

  const parsedResponse = await response.json();

  const paths = parsedResponse.map((individualArticle) => {
    return { params: { slug: individualArticle.Slug } };
  });

  return {
    paths,
    fallback: false,
  };
};
