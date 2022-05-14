import "./style.scss";
import FilterNav from "./filterNav/FilterNav";
import RideDetails from "./rideDetails/RideDetails";
import { useEffect, useState } from "react";
const RidesShow = (props) => {
  const [rides, setRides] = useState(props.rides);
  const [stationcode, setstationcode] = useState(props.stationcode);
  const [citys, setCitys] = useState([]);
  const [states, setStates] = useState([]);

  const addCity = (city) => {
    if (!citys.includes(city)) setCitys((prevCitys) => [...prevCitys, city]);
  };
  const addState = (state) => {
    if (!states.includes(state))
      setStates((prevStates) => [...prevStates, state]);
  };
  function filterFunction(element) {
    console.log(element.target.value);
    console.log(stationcode);
  }
  useEffect(() => {
    props.rides.forEach((ride) => {
      addCity(ride.city);
      addState(ride.state);
    });
  }, [stationcode]);

  let sortRides = rides.sort(
    (a, b) => a.destination_station_code - b.destination_station_code
  );
  const NearestRideDom = sortRides.map((ride) => (
    <RideDetails
      {...ride}
      key={ride.id + ride.destination_station_code}
      stationcode={stationcode}
    />
  ));
  return (
    <div className="container">
      <FilterNav
        rideslength={sortRides.length}
        citys={citys}
        states={states}
        filterfunc={filterFunction}
      />
      <div className="ridesContainer">{NearestRideDom}</div>
    </div>
  );
};

export default RidesShow;
