"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { usePostStore } from "@/src/store/store";

import Title from "./../../../components/ui/Title";
import Error from "@/src/components/ui/Error";
import SinglePost from "./../../../components/ui/SinglePost";
import { Post } from "@/src/types/types";

export default function page() {
  const params = useParams();
  const { id } = params;
  const { posts, setPosts } = usePostStore();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const getPosts = async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
        const data = await res.json();
        setPosts(data);

        setLoading(false);
      } catch {
        setError(true);
      }
    };
    getPosts();
  }, []);

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
                {posts.map((item, index) => (
                  <div
                    key={index}
                    className="single-post-wrapper pb-5 mb-5 last:pb-0 last:mb-0 last:border-0 border-b-2 border-gray-200"
                  >
                    <SinglePost post={item} />
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
