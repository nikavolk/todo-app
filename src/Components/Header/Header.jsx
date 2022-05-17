import "./header.component.style.scss";
import btnMoon from "../../Assets/Images/icon-moon.svg";
import btnSun from "../../Assets/Images/icon-sun.svg";

const Header = ({ theme, setTheme }) => {
  const themeToggle = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const SetButton = () => {
    if (theme === "light") {
      return <img src={btnMoon} onClick={themeToggle} />;
    } else {
      return <img src={btnSun} onClick={themeToggle} />;
    }
  };

  return (
    <div className="header">
      <div className="logo">TODO</div>
      <div className="btn-theme">
        <SetButton onClick={themeToggle} />
      </div>
    </div>
  );
};

export default Header;
