import StatusViolationCards from "./StatusViolationCards";
import StatusViolationSkeleton from "./StatusViolationSkeleton";

function StatusViolationComp({ events, isViolationsLoaded }) {
  return (
    <div className="status-box">
      {events ? (
        <StatusViolationCards
          events={events}
          isViolationsLoaded={isViolationsLoaded}
        />
      ) : (
        <StatusViolationSkeleton />
      )}
      {isViolationsLoaded || <StatusViolationSkeleton />}
    </div>
  );
}

export default StatusViolationComp;
