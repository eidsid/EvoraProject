import "./style.scss";
const Header = (props) => {
  return (
    <div className="header">
      <div className="logo">Edvora</div>
      <div className="user">
        <p className="user__name">{props.name}</p>
        <img src={props.url} alt="user image" className="user__image" />
      </div>
    </div>
  );
};

export default Header;
