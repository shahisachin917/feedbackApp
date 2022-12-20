import PropTypes from "prop-types";
import styles from "./Header.module.css";

function Header({
  text = "Default value",
  textColor = "black",
  bgColor = "red",
}) {
  //   const headerStyles = {
  //     backgroundColor: bgColor,
  //     height: "600px",
  //   };
  return (
    <header style={{ backgroundColor: "red" }}>
      <div className={styles.container}>{text}</div>
    </header>
  );
}

Header.propTypes = {
  text: PropTypes.string.isRequired,
  textColor: PropTypes.string,
  bgColor: PropTypes.string,
};

export default Header;
