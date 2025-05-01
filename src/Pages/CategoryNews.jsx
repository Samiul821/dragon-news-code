import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../components/NewsCard";

const CategoryNews = () => {
  const { id } = useParams();
  const data = useLoaderData();

  const [categoryNews, setCategoryNews] = useState([]);

  // console.log(id, data);

  useEffect(() => {
    if (id == "0") {
      setCategoryNews(data);
      return;
    } else if (id == "1") {
      const filteredNews = data.filter(
        (news) => news.others.is_today_pick == true
      );
      setCategoryNews(filteredNews);
      return;
    } else {
      const filteredNews = data.filter((news) => news.category_id == id);
      setCategoryNews(filteredNews);
    //   console.log(filteredNews);
    }
  }, [data, id]);

  return <div>
    <h2 className="font-semibold mb-4">Total <span className="text-secondary">{categoryNews.length}</span> Found</h2>
    <div className="gird grid-cols-1 gap-5">
      {
        categoryNews.map(news => <NewsCard key={news.id} news={news}></NewsCard>)
      }
    </div>
  </div>;
};

export default CategoryNews;
