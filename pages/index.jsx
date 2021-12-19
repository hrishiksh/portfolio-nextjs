import Head from "next/head";
import BlogPreviewCard from "../components/BlogPreviewCard";
import ProjectPreviewCard from "../components/ProjectPreviewCard";
import Nav from "../components/nav";
import Footer from "../components/Footer";

const Homepage = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Hi i'm Hrishikesh</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700;800&family=Sriracha&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="max-w-screen-sm mx-4 sm:mx-auto my-2 sm:my-6">
        <Nav />
        <img
          className="rounded-[50%] h-40 sm:h-52 p-2 border-solid border-custom-green border-4 my-8"
          src="/images/profilePicture.jpg"
          alt="Image of Hrishikesh Pathak"
        />
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
          {posts
            .reverse()
            .slice(0, 3)
            .map((article) => (
              <BlogPreviewCard
                key={article.Slug}
                name={article.Title}
                shortSnippets={article.Description}
                href={`/blog/${article.Slug}`}
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
  const response = await fetch(`${process.env.DOMAINNAME}/articles`);

  const posts = await response.json();

  return {
    props: {
      posts,
    },
    revalidate: 60,
  };
};
