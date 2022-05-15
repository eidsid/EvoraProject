import { useState } from "react";
import vector from "../../../images/Vector.png";
import "./style.scss";
const FilterNav = (props) => {
  const [activeLinke, setLinkActive] = useState(1);
  const activeLink = (num) => {
    setLinkActive(num);
  };
  const [menuActive, setmenuActive] = useState(false);

  const filterMenuState = () => {
    setmenuActive(!menuActive);
  };

  const stateOptions = props.rides.map((ride) => {
    return (
      <option
        value={ride.origin_station_code}
        key={ride.id * (Math.random() * 1000)}
      >
        {ride.state}
      </option>
    );
  });
  const cityOptions = props.rides.map((ride) => {
    return (
      <option
        value={ride.destination_station_code}
        key={ride.id * (Math.random() * 1000)}
      >
        {ride.city}
      </option>
    );
  });

  return (
    <div className="filter">
      <ul className="filterList">
        <li
          className={activeLinke === 1 ? "active" : ""}
          onClick={() => {
            activeLink(1);
            props.filterNav(1);
          }}
        >
          Nearest rides
        </li>
        <li
          className={activeLinke === 2 ? "active" : ""}
          onClick={() => {
            activeLink(2);
            props.filterNav(2);
          }}
        >
          Upcoming rides ({props.nearComingRideslength})
        </li>
        <li
          className={activeLinke === 3 ? "active" : ""}
          onClick={() => {
            activeLink(3);
            props.filterNav(3);
          }}
        >
          Past rides ({props.paserideslength})
        </li>
      </ul>
      <div className="dropDown">
        <div className="dropDown__btn" onClick={filterMenuState}>
          <img src={vector} alt="victor-image" /> <span>Filters</span>
        </div>
        <div className={`dropDown__menu ${menuActive ? "active" : ""}`}>
          <span>Filters</span>
          <hr />
          <form className="form">
            <select
              name="S tate"
              id="state"
              className="form__control"
              onChange={props.filterfunc}
            >
              <option>State</option>
              {stateOptions}
            </select>
            <select
              name="City"
              id="state"
              className="form__control"
              onChange={props.filterfunc}
            >
              <option>City</option>
              {cityOptions}
            </select>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FilterNav;
