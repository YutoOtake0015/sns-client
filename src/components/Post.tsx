import { PostType } from "@/types";
import Image from "next/image";
import React from "react";

type Props = {
  post: PostType;
};

const Post = (props: Props) => {
  const { post } = props;

  console.log("ログ: ", post.author);

  return (
    <div className="bg-white shadow-md rounded p-4 mb-4">
      <div className="mb-4">
        <div className="flex items-center mb-2">
          <Image
            className="w-10 h-10 rounded-full mr-2"
            src={post.author.profile?.profileImageUrl}
            alt="User Avatar"
            width={100}
            height={100}
          />
          <div>
            <h2 className="font-semibold text-md">{post.author?.username}</h2>
            <p className="text-gray-500 text-sm">
              {new Date(post.createdAt).toLocaleString()}
            </p>
          </div>
        </div>
        <p className="text-gray-700">{post.content}</p>
      </div>
    </div>
  );
};

export default Post;
