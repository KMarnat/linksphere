import ProfileBanner from "../../components/ProfileHero/ProfileHero";
import { useUser } from "../../services/useUser";

const ProfilePage = () => {
  const { user } = useUser();

  console.log(user);

  return (
    <section className="profilepage">
      <ProfileBanner />
    </section>
  );
};

export default ProfilePage;
