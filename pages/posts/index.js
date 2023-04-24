import AllPosts from "@/components/posts/all-posts";
import { getFeaturedPost } from "@/lib/posts-util";

export default function AllPostsPage(props) {
  return (
    <>
      <AllPosts posts={props.posts} />
    </>
  );
}
export function getServerSideProps() {
  const featuredPosts = getFeaturedPost();
  return {
    props: {
      posts: featuredPosts,
    },
  };
}
