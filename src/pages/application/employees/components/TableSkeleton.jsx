import { Skeleton } from "@mui/material";

function TableSkeleton() {
  return (
    <div style={{ marginTop: "55px" }}>
      {Array(10)
        .fill()
        .map(() => (
          <Skeleton
            animation="wave"
            width={"100%"}
            height={120}
            sx={{ mb: -5 }}
          />
        ))}
    </div>
  );
}

export default TableSkeleton;
