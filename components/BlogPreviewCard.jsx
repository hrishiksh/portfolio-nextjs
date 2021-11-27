import Link from "next/link";

const BlogPreviewCard = ({ name, shortSnippets, href = "/" }) => {
  return (
    <div className="py-6">
      <h3 className="font-inter font-bold text-2xl dark:text-gray-100">
        {name}
      </h3>
      <p className="font-inter font-medium text-xl text-gray-500 py-4 dark:text-gray-300">
        {shortSnippets}
      </p>
      <Link href={href}>
        <a className="font-inter font-medium text-xl text-custom-yellow">
          Read more &#8594;
        </a>
      </Link>
    </div>
  );
};

export default BlogPreviewCard;
