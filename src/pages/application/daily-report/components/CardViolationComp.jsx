import RealVoilationCards from "./RealVoilationCards";
import EmptyViolationCards from "./EmptyViolationCards";

function CardViolationComp({ data }) {
  return (
    <div className="card-violation-container">
      {data && Object.keys(data).length ? (
        <RealVoilationCards data={data} />
      ) : (
        <EmptyViolationCards />
      )}
    </div>
  );
}

export default CardViolationComp;
