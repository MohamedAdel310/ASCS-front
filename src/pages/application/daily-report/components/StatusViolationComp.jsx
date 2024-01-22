import StatusViolationCards from './StatusViolationCards';
import StatusViolationSkeleton from './StatusViolationSkeleton';

function StatusViolationComp({ events, isLoading }) {
  return (
    <div className="status-box">
      {isLoading && <StatusViolationSkeleton />}
      {!isLoading && <StatusViolationCards events={events} />}
    </div>
  );
}

export default StatusViolationComp;
