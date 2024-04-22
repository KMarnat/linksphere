import { useUser } from "../../services/useUser";

const ProfilePage = () => {
  const { user } = useUser();

  console.log(user);

  return (
    <section className="profilepage">
      <h1>{user?.user_metadata.fullName}</h1>
      <br />
      <h1>{user?.user_metadata.email}</h1>
    </section>
  );
};

export default ProfilePage;
