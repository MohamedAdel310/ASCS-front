import CardViolation from "./Card-Violation";
import handleIcon from "./handleIcon";

function EmptyViolationCards() {
  return (
    <>
      <CardViolation
        num={0}
        text={"fight"}
        icon={handleIcon("fight")}
        key={1}
      />
      <CardViolation
        num={0}
        text={"phone"}
        icon={handleIcon("phone")}
        key={2}
      />
      <CardViolation
        num={0}
        text={"unauthorized"}
        icon={handleIcon("unauthorized")}
        key={3}
      />
      <CardViolation
        num={0}
        text={"smoke"}
        icon={handleIcon("smoke")}
        key={4}
      />
    </>
  );
}

export default EmptyViolationCards;
