import "./style.scss";
import FilterNav from "./filterNav/FilterNav";
import RideDetails from "./rideDetails/RideDetails";
import { useEffect, useState } from "react";
import useFetch from "components/global/FetchAPI/Fetch";
const RidesShow = (props) => {
  let ridesApi = "https://assessment.api.vweb.app/rides";
  let ridesdate = useFetch(ridesApi);
  console.log(props);
  const [rides, setRides] = useState([]);
  const [nearRides, setNearRides] = useState([]);
  const [nearComingRides, setnearComingRides] = useState([]);
  const [nearPastRides, setNearPastRides] = useState([]);
  const [DomRides, setDomRides] = useState([]);
  const [stationcode, setstationcode] = useState({});

  function filterFunction(element) {
    for (let i = 0; i < rides.length; i++) {
      setstationcode(element.target.value);
    }
  }
  // get user station_code
  useEffect(() => {
    setstationcode(props.user.station_code);
  }, [props.user]);
  // get  rides data
  useEffect(() => {
    setRides(ridesdate);
  }, [ridesdate]);

  const checkIfNear = (path) => {
    let near = false;
    path.map((num) => {
      if (num >= stationcode && num <= stationcode + 4) {
        near = true;
      }
      return 0;
    });
    return near;
  };
  useEffect(() => {
    rides.forEach((ride) => {
      if (checkIfNear(ride.station_path)) {
        const date = new Date(ride.date);
        setNearRides((prevrides) => [...prevrides, ride]);
        setDomRides((prevrides) => [...prevrides, ride]);
        if (date.getMonth() <= 2) {
          setNearPastRides((prevrides) => [...prevrides, ride]);
        } else {
          setnearComingRides((prevrides) => [...prevrides, ride]);
        }
      }
    });
  }, [rides]);
  useEffect(() => {}, [stationcode]);
  let sortRides = DomRides.sort(
    (a, b) => a.destination_station_code - b.destination_station_code
  );
  const RidesDom = sortRides.map((ride) => (
    <RideDetails
      {...ride}
      stationcode={stationcode}
      key={ride.id * (Math.random() * 1000)}
    />
  ));
  const filterNav = (el) => {
    if (el == 1) {
      setDomRides(nearRides);
    } else if (el === 2) {
      setDomRides(nearComingRides);
    } else if (el === 3) {
      setDomRides(nearPastRides);
    }
  };

  return (
    <div className="container">
      <FilterNav
        paserideslength={nearPastRides.length}
        nearComingRideslength={nearComingRides.length}
        rides={rides}
        filterfunc={filterFunction}
        filterNav={filterNav}
      />
      <div className="ridesContainer">
        {RidesDom.length ? RidesDom : "NO Near rides"}
      </div>
    </div>
  );
};

export default RidesShow;
