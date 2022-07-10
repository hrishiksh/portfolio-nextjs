import useDateParser from "../hooks/useDateParser";

const BlogTile = ({ title, thumbnail, author, date }) => {
  let dateParser = useDateParser();
  return (
    <div>
      <img
        className="w-full object-cover rounded"
        src={thumbnail}
        alt={title}
      />
      <h2 className="font-inter font-semibold text-lg sm:text-xl py-6 sm:py-0 sm:pt-6 dark:text-gray-100 text-center">
        {title}
      </h2>
      <p className="font-inter font-normal text-slate-500 pt-2 text-sm text-center">
        by {author} on {dateParser({ date })}
      </p>
    </div>
  );
};

export default BlogTile;
