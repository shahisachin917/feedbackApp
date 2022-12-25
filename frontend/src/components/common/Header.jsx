import PropTypes from "prop-types";
import styles from "./Header.module.css";

function Header({
  text = "Feedback App",
  textColor = "purple",
  bgColor = "white",
}) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  };

  return (
    <header style={headerStyles}>
      <h1 className="container">{text}</h1>
    </header>
  );
}

Header.propTypes = {
  text: PropTypes.string.isRequired,
  textColor: PropTypes.string,
  bgColor: PropTypes.string,
};

export default Header;
