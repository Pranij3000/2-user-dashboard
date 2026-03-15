import { Post } from "@/src/types/types";

export default function SinglePost({ post }: { post: Post }) {
  return (
    <div>
      <p className="text-[24px]">{post.title}</p>
      <p className="text-gray-600">{post.body}</p>
    </div>
  );
}
