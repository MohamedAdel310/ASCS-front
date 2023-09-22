import noResponse from "../assets/image/noResponse.jpg";

export default function NoResponseComp() {
  return (
    <img
      src={noResponse}
      alt="no violations in this day"
      className="no-vilations-img"
      style={{ display: "block" }}
    />
  );
}
