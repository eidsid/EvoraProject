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
  // console.log(props.states, props.citys);
  const stateOptions = props.states.map((state, index) => {
    return (
      <option value={state} key={state + index}>
        {state}
      </option>
    );
  });
  const cityOptions = props.citys.map((city, index) => {
    return (
      <option value={city} key={city + index}>
        {city}
      </option>
    );
  });

  return (
    <div className="filter">
      <ul className="filterList">
        <li
          className={activeLinke === 1 ? "active" : ""}
          onClick={() => activeLink(1)}
        >
          Nearest rides
        </li>
        <li
          className={activeLinke === 2 ? "active" : ""}
          onClick={() => activeLink(2)}
        >
          Upcoming rides ({props.rideslength})
        </li>
        <li
          className={activeLinke === 3 ? "active" : ""}
          onClick={() => activeLink(3)}
        >
          Nearest rides({props.rideslength})
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
