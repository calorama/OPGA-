import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface NewsItemProps {
  title: string;
  description: string;
  imageUrl: StaticImageData | string;
  date: string;
}

const NewsItem: React.FC<NewsItemProps> = ({ title, description, imageUrl, date }) => {
  return (
    <div className="flex flex-col sm:flex-row bg-white shadow-md rounded-lg overflow-hidden mb-6">
      <div className="relative w-full sm:w-1/3 h-48 sm:h-auto">
        <Image
          src={imageUrl} // Используйте путь к изображению
          alt={title}
          layout="fill" // Занять весь контейнер
          objectFit="cover" // Обрезка изображения для заполнения контейнера
        />
      </div>
      <div className="p-4 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <p className="text-gray-700 mb-3">{description}</p>
        </div>
        <p className="text-sm text-gray-500">{date}</p>
      </div>
    </div>
  );
};

export default NewsItem;
