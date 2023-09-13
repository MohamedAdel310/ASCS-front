import Card from "./Card";

function CardContainer({ eventTypesCount, LastEventDetected, text }) {
  return (
    <div className="card-container">
      <div className="card">
        <div className="detected_vehicles">
          <Card
            header="Employees Fight"
            detectedNum={eventTypesCount?.fight || 0}
          />
        </div>
        <div className="unauthtorized_personal">
          <Card
            header="Not Ware Helmet"
            detectedNum={eventTypesCount?.helmet || 0}
          />
        </div>
      </div>
      <div className="last_event">
        <LastEventDetected text={text} />
      </div>
    </div>
  );
}

export default CardContainer;
