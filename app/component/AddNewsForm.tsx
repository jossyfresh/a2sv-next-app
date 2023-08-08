"use client";
import React from "react";
import { db } from "../../firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";

export default function AddNewsForm() {
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  const router = useRouter();

  const postCollection = collection(db, "posts");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      title,
      content,
      date: new Date().toLocaleDateString(),
    };
    await addDoc(postCollection, data);
    router.push("/");
  };

  return (
    <div>
      <div className="flex justify-center text-2xl mt-10">
        <h1>Add News To News Page</h1>
      </div>
      <form
        className="flex flex-col justify-center items-center mt-10"
        onSubmit={handleSubmit}
      >
        <div className="mb-6 w-[50%]">
          <label
            htmlFor="large-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Large input
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter title"
            className="block w-full p-4  border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <textarea
          className="w-[50%] border border-blue-300 rounded-md p-2 focus:border-none"
          rows={10}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Enter content"
        />
        <button
          type="submit"
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 mt-5 mb-5"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
