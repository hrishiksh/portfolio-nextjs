const BlogTile = ({ title, thumbnail }) => {
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
    </div>
  );
};

export default BlogTile;
