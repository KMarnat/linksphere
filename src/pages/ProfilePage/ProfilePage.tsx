import { useQuery } from "@tanstack/react-query";
import ProfileBanner from "../../components/ProfileHero/ProfileHero";
import { getPosts } from "../../services/apiPosts";
import { useUser } from "../../services/useUser";
import SinglePost from "../../components/SinglePost/SinglePost";

const ProfilePage = () => {
  const { user } = useUser();

  const {
    isLoading,
    data: posts,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });
  console.log(posts);
  if (error) console.error(error);

  return (
    <section className="profilepage">
      <ProfileBanner />
      {posts
        ?.filter((post) => post.user_id.toString() === user?.id)
        .map((filteredPost) => (
          <SinglePost
            key={filteredPost.id}
            post={filteredPost.content}
            post_id={filteredPost.id}
            user_id={filteredPost.user_id}
            created_at={filteredPost.created_at}
          />
        ))}
    </section>
  );
};

export default ProfilePage;
