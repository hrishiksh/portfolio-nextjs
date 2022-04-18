import Link from "next/link";

const BlogPreviewCard = ({ name, shortSnippets, href = "/" }) => {
  return (
    <div className="py-6">
      <h3 className="font-inter font-bold text-xl sm:text-2xl dark:text-gray-100">
        {name}
      </h3>
      <p className="font-inter font-normal sm:font-medium text-base leading-loose sm:leading-loose sm:text-xl text-gray-500 py-4 dark:text-gray-300">
        {shortSnippets}
      </p>
      <Link href={href}>
        <a className="font-inter font-medium text-base sm:text-xl text-custom-yellow">
          Read more &#8594;
        </a>
      </Link>
    </div>
  );
};

export default BlogPreviewCard;
