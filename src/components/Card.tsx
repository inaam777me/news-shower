import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { addToFavorites, deleteFavorites} from './Favoritelist';

type CardProps = {
  title: string;
  description: string;
  imageUrl?: string;
  url?: string;
  id: number;
};

const Card: React.FC<CardProps> = ({ title, description, imageUrl, url, id }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
      <div className="relative">
        <a href={url}>
          <img className="rounded-t-lg w-full object-cover" src={imageUrl} alt={title} />
        </a>

        <button
          className="absolute top-2 right-2 p-2 rounded-full bg-white shadow-md hover:bg-gray-100"
          onClick={() => {
            setIsFavorite(!isFavorite);
            if (!isFavorite) {
              addToFavorites(id);
            } else {
              deleteFavorites(id);
            }
          }}
        >
          <Heart className={`w-5 h-5 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-red-500'}`} />
        </button>
      </div>
      <div className="p-5">
        <a href={url}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <a
          href={url}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white 
          bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 
          dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Card;

