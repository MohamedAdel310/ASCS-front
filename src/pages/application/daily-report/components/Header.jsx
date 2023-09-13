function Header({ children }) {
  return (
    <div className="daily-report--header">
      <h1>Detected events</h1>
      {children}
    </div>
  );
}

export default Header;
