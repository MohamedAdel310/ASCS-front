import CardViolation from "./Card-Violation";
import handleIcon from "./handleIcon";

function RealVoilationCards({ data }) {
  const dataKeys = Object.keys(data);
  const result = dataKeys?.map((el, index) => (
    <CardViolation num={data[el]} text={el} icon={handleIcon(el)} key={index} />
  ));

  return result;
}

export default RealVoilationCards;
