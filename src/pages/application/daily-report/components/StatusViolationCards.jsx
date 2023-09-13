import noResponse from "../../../../assets/image/noResponse.jpg";
import jsonText from "../../../../assets/text.json";
import criticalLevelFun from "./criticalLevelFun";
import StatusViolation from "./Status-Violation";
import eventDetails from "../../../../Functions/eventDetails";

const cricicalLevelType = (type) => {
  let str = type;
  type === "ppe" && (str = jsonText.ppe);

  return str;
};

function StatusViolationCards({ events, isViolationsLoaded }) {
  if (events.length) {
    return (
      isViolationsLoaded &&
      events.map((event) => (
        <StatusViolation
          level={criticalLevelFun(event.type)}
          event={cricicalLevelType(event.type)}
          imageUrls={event.info.imageUrls}
          eventMessage={eventDetails(
            event.type,
            event.arriveAt,
            event.info.cam
          )}
          key={event._id}
        />
      ))
    );
  }
  return (
    isViolationsLoaded && (
      <img
        src={noResponse}
        alt="no violations in this day"
        className="no-vilations-img"
      />
    )
  );
}

export default StatusViolationCards;
