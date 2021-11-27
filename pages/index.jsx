import Head from "next/head";
import BlogPreviewCard from "../components/BlogPreviewCard";
import ProjectPreviewCard from "../components/ProjectPreviewCard";
import TwitterIcon from "../icons/TwitterIcon";
import LinkedinIcon from "../icons/LinkedinIcon";
import GithubIcon from "../icons/GithubIcon";
import InstagramIcon from "../icons/InstagramIcon";
import MailIcon from "../icons/MailIcon";
import Nav from "../components/nav";
import Link from "next/link";

const Homepage = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Hi i'm Hrishikesh</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700;800&family=Sriracha&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="max-w-screen-sm mx-auto my-8">
        <Nav />
        <img
          className="rounded-[50%] h-52 p-2 border-solid border-custom-green border-4 my-8"
          src="/images/profilePicture.jpg"
          alt="Image of Hrishikesh Pathak"
        />
        <section className="my-8">
          <p className="font-sriracha text-custom-green text-xl">Hey there,</p>
          <h2 className="font-inter font-extrabold text-5xl py-2 dark:text-white">
            I'm Hrishikesh.
          </h2>
          <p className="font-inter font-medium text-xl text-gray-500 py-4 dark:text-gray-300">
            I am an full-stack application developer for Android/iOs and web.
            Please explore the site. I am glad you are here.
          </p>
        </section>
        <section className="my-8">
          <p className="font-sriracha text-custom-yellow text-xl">Blog</p>
          <h2 className="font-inter font-extrabold text-5xl py-2 dark:text-white">
            Some recent posts.
          </h2>
          {posts
            .reverse()
            .slice(0, 3)
            .map((article) => (
              <BlogPreviewCard
                key={article.title}
                name={article.Title}
                shortSnippets={article.Description}
                href={`/blog/${article.Slug}`}
              />
            ))}
        </section>
        <section className="my-8">
          <p className="font-sriracha text-custom-pink text-xl">Projects</p>
          <h2 className="font-inter font-extrabold text-5xl py-2 dark:text-white">
            I like to solve problems.
          </h2>
          <h2 className="font-inter font-extrabold text-5xl py-2 dark:text-white">
            Here’s a few.
          </h2>
          <ProjectPreviewCard />
        </section>
        <footer>
          <div className="w-full h-[2px] bg-black"></div>
          <section className="flex justify-between my-8">
            <div>
              <p className="font-inter font-semibold text-xl py-2 dark:text-white">
                PAGES
              </p>
              <p className="font-inter font-medium text-xl text-gray-500  py-1 dark:text-gray-200">
                <Link href="/">Home</Link>
              </p>
              <p className="font-inter font-medium text-xl text-gray-500  py-1 dark:text-gray-200">
                <Link href="/">About</Link>
              </p>
              <p className="font-inter font-medium text-xl text-gray-500  py-1 dark:text-gray-200">
                <Link href="/blog">Blog</Link>
              </p>
            </div>
            <div>
              <p className="font-inter font-semibold text-xl py-2 dark:text-white">
                EXTRA
              </p>
              <p className="font-inter font-medium text-xl text-gray-500 py-1 dark:text-gray-200">
                Newsletter
              </p>
              <p className="font-inter font-medium text-xl text-gray-500 py-1 dark:text-gray-200">
                Resume
              </p>
              <p className="font-inter font-medium text-xl text-gray-500 py-1 dark:text-gray-200">
                Snippets
              </p>
            </div>
            <div className="max-w-[33%]">
              <p className="font-inter font-semibold text-xl py-2 dark:text-white">
                SOCIAL
              </p>
              <div className="flex flex-wrap">
                <a
                  href="https://twitter.com/hrishikshpathak"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TwitterIcon />
                </a>
                <a href="https://www.linkedin.com/in/hrishikshpathak">
                  <LinkedinIcon />
                </a>
                <a
                  href="https://github.com/hrishiksh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubIcon />
                </a>
                <a href="https://www.instagram.com/hrishikesh__pathak/">
                  <InstagramIcon />
                </a>
                <a href="mailto:hrishikeshb2pathak@gmail.com">
                  <MailIcon />
                </a>
              </div>
            </div>
          </section>

          <p className="font-inter font-medium text-xl text-gray-500  py-1 dark:text-gray-200">
            © 2021 Hrishikesh Pathak. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
};

export default Homepage;

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
