"use client";
import React from "react";
import { db } from "../../../firebase";
import {
  collection,
  getDocs,
  doc,
  getDoc,
  deleteDoc,
} from "firebase/firestore";
import { useRouter } from "next/navigation";

interface Props {
  params: {
    slug: string;
  };
}

export default function page({ params }: Props) {
  const [news, setNews] = React.useState({
    title: "",
    content: "",
    date: "",
  });
  const postCollection = collection(db, "posts");
  const getNews = async () => {
    const data = await getDoc(doc(postCollection, params.slug as string));
    const newsData = data.data();
    setNews(newsData as any);
  };
  const router = useRouter();
  const handleDelete = async () => {
    const docRef = doc(db, "posts", params.slug as string);
    await deleteDoc(docRef);
    router.push("/");
  };

  React.useEffect(() => {
    getNews();
  }, []);

  return (
    <div className=" mt-10 w-[70%] ml-52 border border-slate-200 p-5 rounded-md shadow-md">
      <div className="flex justify-start text-2xl bg-slate-300 mt-5 p-5 rounded-md">
        <h1>{news.title}</h1>
      </div>
      <div className="mt-5 mx-3">{news.content}</div>
      <button
        className="px-4 py-2  text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 mt-5"
        onClick={handleDelete}
      >
        Delete
      </button>
      <button
        className="px-4 py-2 ml-5 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 mt-5"
        onClick={() => router.push("/")}
      >
        Back
      </button>
    </div>
  );
}
