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
    stationcode,
  } = props;
  let distance = destination_station_code - stationcode;
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
            <span>
              {" "}
              {distance < 0
                ? Math.abs(distance) + " backword "
                : distance + " forword "}
            </span>
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
