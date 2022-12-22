import { CardWrapper } from "../../styles/Card/Card";

function Card({ children, bgColor }) {
  //   console.log(props);
  return (
    <CardWrapper bgColor={bgColor ? bgColor : "pink"}>{children}</CardWrapper>
  );
}

export default Card;
