import PostUnit from "../../components/Post/Post";
import { useAuthentication } from "../../hooks/useAuthentication";

export default function Home() {
  const { auth } = useAuthentication();

  const user = auth.currentUser;
  console.log(user)

  return (
    <div>
      <PostUnit />
    </div>
  );
}
