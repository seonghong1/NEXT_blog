import PostContent from "@/components/posts/post-detail/post-content";
import { getPostData } from "@/lib/posts-util";

export default function PostPage(props) {
  console.log(props);
  return (
    <>
      <PostContent post={props.post} />
    </>
  );
}

export function getServerSideProps(context) {
  const { params } = context;
  const postData = getPostData(params.slug);
  return {
    props: {
      post: postData,
    },
  };
}
