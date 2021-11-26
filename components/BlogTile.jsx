const BlogTile = ({ title, thumbnail }) => {
  return (
    <div>
      {/* TODO: Change this with some responsive value */}
      <img
        className="w-full h-[263px] object-cover rounded"
        src={thumbnail}
        alt={title}
      />
      <h2 className="font-inter font-semibold text-xl pt-6 dark:text-gray-100 text-center">
        {title}
      </h2>
    </div>
  );
};

export default BlogTile;
