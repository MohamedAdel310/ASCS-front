import { Alert, AlertTitle, Skeleton } from "@mui/material";

function StatusViolationSkeleton() {
  return (
    <>
      {Array(6)
        .fill()
        .map(() => (
          <Skeleton
            variant="rounded"
            animation="wave"
            width={"100%"}
            height={100}
          />
        ))}
    </>
  );
}

export default StatusViolationSkeleton;
