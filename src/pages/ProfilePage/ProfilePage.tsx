import { useQuery } from "@tanstack/react-query";
import ProfileBanner from "../../components/ProfileHero/ProfileHero";
import { getUserPosts } from "../../services/apiPosts";
import { useUser } from "../../services/useUser";
import SinglePost from "../../components/SinglePost/SinglePost";

const ProfilePage = () => {
  const { user } = useUser();

  const {
    // isLoading,
    data: posts,
    error,
  } = useQuery({
    queryKey: ["userPosts"],
    queryFn: () => {
      if (user) {
        return getUserPosts(user.id);
      }
      return null;
    },
  });
  if (error) console.error(error);

  return (
    <section className="profilepage">
      <ProfileBanner />

      {posts
        ?.map((post) => (
          <SinglePost
            key={post.id}
            post={post.content}
            post_id={post.id}
            user_id={post.user_id}
            created_at={post.created_at}
          />
        ))
        .reverse()}
    </section>
  );
};

export default ProfilePage;
