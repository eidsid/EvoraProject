import Header from "../Header/Header";
import RidesShow from "../RidesShow/RidesShow";
import useFetch from "../global/FetchAPI/Fetch";
import { useEffect, useState } from "react";
function Home() {
  let userApi = "https://assessment.api.vweb.app/user";
  const [user, setuser] = useState({});
  let userdata = useFetch(userApi);
  useEffect(() => {
    setuser(userdata);
  }, [userdata]);
  return (
    <div className="home">
      <Header {...user} />
      <RidesShow user={user} />
    </div>
  );
}

export default Home;
