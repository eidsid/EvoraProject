import "./style.scss";
const RideDetails = (props) => {
  const {
    city,
    date,
    id,
    map_url,
    origin_station_code,
    state,
    station_path,
    destination_station_code,
  } = props;

  return (
    <div className="details">
      <div className="col">
        <img src={map_url} alt="ride image" />
        <div className="col">
          <p>
            Ride id: <span>{id}</span>
          </p>
          <p>
            Origin Station: <span>{origin_station_code}</span>
          </p>
          <p>
            station_path: <span>[{station_path.map((el) => `${el},`)}]</span>
          </p>
          <p>
            Date: <span> {date}</span>
          </p>
          <p>
            Distance:{" "}
            <span> {destination_station_code - props.stationcode}</span>
          </p>
        </div>
      </div>
      <div className="col names">
        <span>{city}</span>
        <span>{state}</span>
      </div>
    </div>
  );
};

export default RideDetails;
