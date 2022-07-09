import Link from "next/link";
import TwitterIcon from "../icons/TwitterIcon";
import LinkedinIcon from "../icons/LinkedinIcon";
import GithubIcon from "../icons/GithubIcon";
import InstagramIcon from "../icons/InstagramIcon";
import MailIcon from "../icons/MailIcon";
const Footer = () => {
  return (
    <footer>
      <div className="w-full h-[1px] bg-gray-200 dark:bg-gray-600"></div>
      <section className="flex justify-between my-8">
        <div>
          <p className="font-inter font-semibold text-base sm:text-xl py-2 dark:text-white">
            PAGES
          </p>
          <p className="font-inter font-medium text-base sm:text-xl text-gray-500  py-1 dark:text-gray-200">
            <Link href="/">Home</Link>
          </p>
          <p className="font-inter font-medium text-base sm:text-xl text-gray-500  py-1 dark:text-gray-200">
            <Link href="/">About</Link>
          </p>
          <p className="font-inter font-medium text-base sm:text-xl text-gray-500  py-1 dark:text-gray-200">
            <Link href="/blog">Blog</Link>
          </p>
        </div>
        <div>
          <p className="font-inter font-semibold text-base sm:text-xl py-2 dark:text-white">
            EXTRA
          </p>
          <p className="font-inter font-medium text-base sm:text-xl text-gray-500 py-1 dark:text-gray-200">
            Newsletter
          </p>
          <p className="font-inter font-medium text-base sm:text-xl text-gray-500 py-1 dark:text-gray-200">
            Resume
          </p>
          <p className="font-inter font-medium text-base sm:text-xl text-gray-500 py-1 dark:text-gray-200">
            Snippets
          </p>
        </div>
        <div className="max-w-[33%]">
          <p className="font-inter font-semibold text-base sm:text-xl py-2 dark:text-white">
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
      <div className="w-full h-[1px] bg-gray-200 dark:bg-gray-600 mb-2"></div>
      <p className="font-inter font-medium text-base sm:text-xl text-gray-500  py-1 dark:text-gray-200">
        © 2022 Hrishikesh Pathak. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
