import styles from "./Card.module.css";

function Card({ children, bgColor = "red" }) {
  //   console.log(props);
  return <div style={{ backgroundColor: bgColor }}>{children}</div>;
}

export default Card;
