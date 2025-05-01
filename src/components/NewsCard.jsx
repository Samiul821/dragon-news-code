import { FaRegEye, FaStar, FaRegBookmark, FaShareAlt } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const { title, author, details, image_url, total_view, rating, others } =
    news;

  const formattedDate = new Date(
    news.author.published_date
  ).toLocaleDateString();

  return (
    <div className="card bg-base-100 shadow-lg rounded-lg  mb-5">
      {/* Header - Author Info */}
      <div className="flex justify-between items-center p-4 bg-base-200">
        <div className="flex items-center gap-3">
          <img
            src={author?.img}
            alt={author?.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold">{author?.name}</p>
            <p className="text-sm text-gray-500">{formattedDate}</p>
          </div>
        </div>
        <div className="flex items-center gap-3 text-gray-500">
          <FaRegBookmark className="cursor-pointer hover:text-blue-600" />
          <FaShareAlt className="cursor-pointer hover:text-blue-600" />
        </div>
      </div>

      {/* Title */}
      <h2 className="text-xl font-bold px-4">{title}</h2>

      {/* Image */}
      <figure className="px-4 py-3">
        <img
          src={image_url}
          alt="news"
          className="w-full h-72 object-cover rounded-md"
        />
      </figure>

      {/* Details */}
      <div className="px-4 pb-2 text-sm text-gray-700">
        {details.length > 200 ? (
          <>
            {details.slice(0, 200)}...
            <span className="text-primary font-semibold cursor-pointer hover:underline ml-1">
              Read More
            </span>
          </>
        ) : (
          details
        )}
      </div>

      {/* Footer */}
      <div className="px-4 py-4 border-t flex justify-between items-center text-sm text-gray-600">
        {/* Rating */}
        <div className="flex items-center gap-1 text-orange-400 font-semibold">
          <FaStar className="text-base" />
          <span>{rating?.number}</span>
          {others?.is_trending && (
            <span className="badge badge-warning text-xs ml-2">Trending</span>
          )}
        </div>

        {/* Views */}
        <div className="flex items-center gap-1">
          <FaRegEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
