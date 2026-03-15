"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { usePostStore } from "@/src/store/store";
import { Post } from "@/src/types/types";
import AddPost from "@/src/components/sections/AddPost";

import Title from "./../../../components/ui/Title";
import Error from "@/src/components/ui/Error";
import SinglePost from "./../../../components/ui/SinglePost";

export default function page() {
  const params = useParams();
  const { id } = params;
  const { posts, setPosts } = usePostStore();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [paginations, setPaginations] = useState<number>();
  const [activePagination, setActivePagination] = useState<number>(0);
  const [filteredList, setFilteredList] = useState<Post[]>([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
        const data = await res.json();
        setPosts(data);
        setPaginations(Math.ceil(data.length / 4));

        setLoading(false);
      } catch {
        setError(true);
      } finally {
      }
    };
    getPosts();
  }, []);

  useEffect(() => {
    const start = activePagination * 4;
    const end = start + 4;

    setFilteredList(posts.slice(start, end));
  }, [activePagination, posts]);
  return (
    <>
      <div className="posts-container wrapper p-2">
        <div className="posts-wrapper bg-white rounded-[24px] p-5">
          <div className="title-wrapper ml-6 mb-5">
            <Title text="Posts" />
          </div>

          {error ? (
            <Error />
          ) : loading ? (
            <p>Loading...</p>
          ) : (
            <>
              <div className="posts-wrapper">
                {filteredList.map((item, index) => (
                  <div
                    key={index}
                    className="single-post-wrapper pb-5 mb-5 last:pb-0 last:mb-0 last:border-0 border-b-2 border-gray-200"
                  >
                    <SinglePost post={item} />
                  </div>
                ))}
              </div>

              <div className="pagination-wrapper mt-6 w-fit mx-auto">
                {[...Array(paginations)].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActivePagination(index)}
                    className="text-[24px] mr-5 last:mr-0 border border-gray-700 px-3 hover:bg-gray-700 hover:text-white cursor-pointer"
                  >
                    {index + 1}
                  </button>
                ))}
              </div>

              <AddPost />
            </>
          )}
        </div>
      </div>
    </>
  );
}
