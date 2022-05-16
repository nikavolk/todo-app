import "./header.component.style.scss";
import btnTheme from "../../Assets/Images/icon-moon.svg";

const Header = () => {
  const doNothing = () => {
    console.log("nothing");
  };

  return (
    <div className="header">
      <div className="logo">TODO</div>
      <div className="btn-theme">
        <img src={btnTheme} onClick={doNothing} />
      </div>
      {/* <button className="btn-theme">Change Theme</button> */}
    </div>
  );
};

export default Header;
