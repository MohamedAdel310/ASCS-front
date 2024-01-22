import { Skeleton } from '@mui/material';

function StatusViolationSkeleton() {
  return (
    <>
      {Array(6)
        .fill()
        .map((__, index) => (
          <Skeleton
            variant="rounded"
            animation="wave"
            width={'100%'}
            height={100}
            key={index}
          />
        ))}
    </>
  );
}

export default StatusViolationSkeleton;
