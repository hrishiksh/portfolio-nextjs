import BlogPreviewCard from "../components/BlogPreviewCard";
import ProjectPreviewCard from "../components/ProjectPreviewCard";
import Nav from "../components/nav";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";
import { postFilePaths, POSTS_PATH } from "../utils/mdxUtils";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";

const Homepage = ({ posts }) => {
  return (
    <>
      <NextSeo
        title="Hrishikesh Pathak"
        description="I am an full-stack application developer for Android/iOs and web"
        canonical="https://hrishikeshpathak.com"
        openGraph={{
          title: "Hrishikesh Pathak",
          description:
            "I am an full-stack application developer for Android/iOs and web",
          type: "profile",
          url: "https://hrishikeshpathak.com",
          profile: {
            firstName: "Hrishikesh",
            lastName: "Pathak",
            username: "Hrishikesh Pathak",
            gender: "Male",
          },
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
      <Head>
        <meta
          name="google-site-verification"
          content="TLsi20acjV6Wy0Guhk37LM0UsumUEkViUebHGjOAhGY"
        />
      </Head>
      <div className="max-w-screen-lg mx-4 sm:mx-auto my-2 sm:my-6">
        <Nav />
        <main className="w-full">
          <section className="my-32">
            <h1 className="font-inter font-bold text-4xl m-auto text-center">
              Web Developer & Content Writer
            </h1>
            <p className="font-inter font-normal text-lg text-slate-600 m-auto text-center mt-2">
              I make web applications and like to write about them
            </p>
            <img
              className="rounded-full h-40 sm:h-52 p-2 border-solid border-custom-green border-4 mt-8 mx-auto"
              src="/images/profilePicture.jpg"
              alt="Image of Hrishikesh Pathak"
            />
          </section>
          <section className="w-full bg-slate-700 pt-14 pb-32 rounded-md">
            <h2 className="font-inter font-semibold text-2xl text-white text-center pb-6">
              Hey there, I’m Hrishikesh
            </h2>
            <p className="font-inter font-medium text-lg w-1/2 text-white text-center m-auto">
              Primarily I am a web developer. I also make apps with flutter. In
              my free time, I write blog articles. I have 5 years of freelancing
              experience and worked with many brands. Please explore this site.
              I am glad you are here.
            </p>
          </section>
        </main>

        <section className="my-8">
          <p className="font-sriracha text-custom-green text-lg sm:text-xl">
            Hey there,
          </p>
          <h2 className="font-inter font-bold sm:font-extrabold text-3xl sm:text-5xl py-2 dark:text-white">
            I'm Hrishikesh.
          </h2>
          <p className="font-inter text-base leading-loose sm:leading-loose font-normal sm:font-medium sm:text-xl text-gray-500 py-2 sm:py-4 dark:text-gray-300">
            I am an full-stack application developer for Android/iOs and web.
            Please explore the site. I am glad you are here.
          </p>
        </section>
        <section className="my-8">
          <p className="font-sriracha text-custom-yellow text-lg sm:text-xl">
            Blog
          </p>
          <h2 className="font-inter font-bold sm:font-extrabold text-3xl sm:text-5xl py-2 dark:text-white">
            Some recent posts.
          </h2>
          {posts.slice(0, 3).map((article) => (
            <BlogPreviewCard
              key={article.data.slug}
              name={article.data.title}
              shortSnippets={article.data.description}
              href={`/blog/${article.data.slug}`}
            />
          ))}
        </section>
        <section className="my-8">
          <p className="font-sriracha text-custom-pink text-lg sm:text-xl">
            Projects
          </p>
          <h2 className="font-inter font-bold sm:font-extrabold text-3xl sm:text-5xl py-2 dark:text-white">
            I like to solve problems.
          </h2>
          <ProjectPreviewCard />
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Homepage;

export const getStaticProps = async (context) => {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { data } = matter(source);
    return {
      data,
    };
  });

  return { props: { posts } };
};
