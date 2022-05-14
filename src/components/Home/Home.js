import Header from "../Header/Header";
import RidesShow from "../RidesShow/RidesShow";
import useFetch from "../global/FetchAPI/Fetch";
function Home() {
  let ridesApi = "https://assessment.api.vweb.app/rides";
  let userApi = "https://assessment.api.vweb.app/user";
  let user = useFetch(userApi);
  let rides = useFetch(ridesApi);
  console.log(rides, user);
  return (
    <div className="home">
      <Header {...user} />
      <RidesShow rides={rides} stationcode={user.station_code} />
    </div>
  );
}

export default Home;
