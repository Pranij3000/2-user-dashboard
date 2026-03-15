import { useParams } from "next/navigation";
import { useState } from "react";
import { usePostStore } from "@/src/store/store";

export default function AddPost() {
  const params = useParams();
  const { id } = params;
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const { posts, setPosts } = usePostStore();

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newPost = {
      id: posts.length,
      userId: Number(id),
      title: title,
      body: body,
    };

    setPosts([...posts, newPost]);
    setBody("");
    setTitle("");
  };

  return (
    <>
      <div className="py-10">
        <strong>Add Post for User {id}</strong>
        <form onSubmit={handleSubmit}>
          <div className="input-box mb-2">
            <label htmlFor="title">Title: </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="p-1 border"
            />
          </div>

          <div className="input-box mb-2">
            <label htmlFor="body">Body: </label>
            <textarea
              id="body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              className="p-1 border"
            />
          </div>

          <button
            type="submit"
            className="px-3 py-1 border-gray-600 border cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
