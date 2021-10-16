const BlogTile = ({ description, title, authorImg, author }) => {
  return (
    <div className=" bg-gray-50 rounded-md cursor-pointer mb-6 sm:mb-0 dark:bg-gray-800 dark:border-gray-600">
      <h2 className="font-bold font-ptSans text-xl sm:text-2xl pt-6 pb-6 px-6 dark:text-white dark:hover:text-blue-400">
        {title}
      </h2>
      <p className="font-merriweather font-light text-sm sm:text-lg px-6 leading-loose sm:leading-loose dark:text-white">
        {description}
      </p>
      <div className="flex items-center justify-start px-6 pt-8 pb-6">
        <div
          className="bg-cover h-8 w-8 rounded-full mr-2"
          style={{ backgroundImage: `url(${authorImg})` }}
        ></div>
        <p className="font-ptSans font-normal text-sm sm:text-lg dark:text-white">
          {author}
        </p>
      </div>
    </div>
  );
};

export default BlogTile;
