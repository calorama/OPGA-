import React from 'react';
import NewsItem from '@/components/newsitem/NewsItem';
import Azat1 from '@/app/test-images/azat-1.jpg'
import David1 from '@/app/test-images/photo_2024-10-16_19-17-04.jpg';

const newsData = [
  {
    title: "Азат Кироваканский,получил статус международной шлюхи при недавнем конфликте !",
		description: "Описание ~~~",
    imageUrl: Azat1,
    date: "16 октября 2024"
  },
  {
    title: "Давид Степанян Каренович,получил статус международной шлюхи при недавнем конфликте !",
    description: "Описание ~~~",
    imageUrl: David1,
    date: "15 октября 2024"
  },
];

const NewsList: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Новости</h1>
      <div className="flex flex-col">
        {newsData.map((newsItem, index) => (
          <NewsItem
            key={index}
            title={newsItem.title}
            description={newsItem.description}
            imageUrl={newsItem.imageUrl}
            date={newsItem.date}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsList;
