import { Post as PostData } from "@prisma/client";

interface PostProps {
  post: PostData;
}

const Post = ({ post }: PostProps) => {
  return <article>{post.content}</article>;
};

export default Post;
