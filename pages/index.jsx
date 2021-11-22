import Head from "next/head";
import BlogPreviewCard from "../components/BlogPreviewCard";
import ProjectPreviewCard from "../components/ProjectPreviewCard";
import TwitterIcon from "../icons/TwitterIcon";
import LinkedinIcon from "../icons/LinkedinIcon";
import GithubIcon from "../icons/GithubIcon";
import InstagramIcon from "../icons/InstagramIcon";
import MailIcon from "../icons/MailIcon";
import Nav from "../components/nav";
import LightIcon from "../icons/LightIcon";

const Homepage = () => {
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
          <BlogPreviewCard
            name="Create a basic sitemap for Nextjs website"
            shortSnippets="This is a short article on creating a basic sitemap for Nextjs website. The sitemap we are building in this article will be very basic and if you are just starting up, I think this will help you to save time and reduce complexity."
          />
          <BlogPreviewCard
            name="Highlight code snippets in Nextjs"
            shortSnippets="How to implement syntax highlighting in your ReactJS or nextjs site with the help of a prismJs based NPM package, called prism-react-renderer."
          />
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
                Home
              </p>
              <p className="font-inter font-medium text-xl text-gray-500  py-1 dark:text-gray-200">
                About
              </p>
              <p className="font-inter font-medium text-xl text-gray-500  py-1 dark:text-gray-200">
                Blogs
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
                <TwitterIcon />
                <LinkedinIcon />
                <GithubIcon />
                <InstagramIcon />
                <MailIcon />
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