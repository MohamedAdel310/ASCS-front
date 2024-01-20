export default function Card(props) {
  return (
    <a href="/application">
      <div className="img">
        <div className="info">
          <img src="/image/branch.jpg" alt="branch logo" />
          <h3>{props.name}</h3>
        </div>
      </div>
    </a>
  );
}
