import { Skeleton } from "@mui/material";

function AttendanceTableSkeleton() {
  return (
    <div style={{ marginTop: "40px" }}>
      {Array(10)
        .fill()
        .map(() => (
          <Skeleton
            animation="wave"
            width={"100%"}
            height={110}
            sx={{ mb: -5 }}
          />
        ))}
    </div>
  );
}

export default AttendanceTableSkeleton;
