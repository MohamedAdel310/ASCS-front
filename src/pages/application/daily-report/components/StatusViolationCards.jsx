import jsonText from '../../../../assets/text.json';
import criticalLevelFun from './criticalLevelFun';
import StatusViolation from './Status-Violation';
import eventDetails from '../../../../Functions/eventDetails';
import NoResponseComp from '../../../../components/NoResponseImg';

const cricicalLevelType = (type) => {
  let str = type;
  type === 'ppe' && (str = jsonText.ppe);

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
  return isViolationsLoaded && <NoResponseComp />;
}

export default StatusViolationCards;
