"use client";
import React from "react";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

import Link from "next/link";

interface News {
  id: string;
  title: string;
  content: string;
  date: string;
}

interface Props {
  news: News[];
}

export default function Posts() {
  const [News, setNews] = React.useState<News[]>([]);
  const postCollection = collection(db, "posts");

  const getNews = async () => {
    const data = await getDocs(postCollection);
    const news = data.docs.map((doc) => {
      const newsData = doc.data() as News;
      return { ...newsData, id: doc.id };
    });
    setNews(news);
    console.log(news);
  };
  React.useEffect(() => {
    getNews();
    console.log(News);
  }, []);
  return (
    <div className=" mt-10 w-[70%] flex flex-col gap-10 flex-wrap ml-52 py-5 rounded-md">
      {News.map((news) => (
        <Link href={`/posts/${news.id}`} key={news.id}>
          <div className="flex justify-start text-xl border border-blue-500  h-32 items-center p-5 rounded-md hover:border-blue-700 hover:shadow-lg hover:shadow-sky-200">
            <h1>{news.title}</h1>

          </div>
        </Link>
      ))}
    </div>
  );
}
