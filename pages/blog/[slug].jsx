import { useContext } from "react";
import Head from "next/head";
import Link from "next/link";
import Chips from "../../components/Chips";
import IconBtn from "../../components/IconBtn";
import { GetStaticPaths, GetStaticProps } from "next";
import { components } from "../../utils/mdxComponentStyle";
import { NextSeo } from "next-seo";
import gfm from "remark-gfm";
import ReactMarkdown from "react-markdown";

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
          href="https://fonts.googleapis.com/css2?family=Inconsolata&family=Inter&family=Sriracha&display=swap"
          rel="stylesheet"
        />
      </Head>
      <header className="m-4 sm:max-w-3xl sm:w-full sm:m-auto sm:mt-8 flex justify-between"></header>
      <main className="m-4 sm:max-w-3xl sm:w-full sm:mx-auto sm:m-8">
        <h1 className="font-ptSans font-bold text-3xl sm:text-4xl py-6 dark:text-white">
          {parsedResponse[0].Title}
        </h1>
        <div className="flex mb-8 w-full">
          {parsedResponse[0].categories.map((value) => (
            <Chips key={value.CategoryName} title={value.CategoryName} />
          ))}
        </div>
        <ReactMarkdown
          children={parsedResponse[0].Content}
          remarkPlugins={[gfm]}
          components={components}
        />
      </main>
      <footer></footer>
    </>
  );
};

export default BlogPost;

export const getStaticProps = async ({ params }) => {
  const response = await fetch(
    `https://devquark-blog-production.herokuapp.com/articles?Slug=${params.slug}`
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
  const response = await fetch(
    "https://devquark-blog-production.herokuapp.com/articles?Slug=file-picker-flutter"
  );

  const parsedResponse = await response.json();

  const paths = parsedResponse.map((individualArticle) => {
    return { params: { slug: individualArticle.Slug } };
  });

  return {
    paths,
    fallback: "blocking",
  };
};
