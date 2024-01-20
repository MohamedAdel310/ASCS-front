import './componentsStyle.css';

export default function LogOutPopup(props) {
  const handleLogout = () => {
    props.setOpenLogOutPopup(false);

    localStorage.removeItem('token');
  };

  const handleCancelLogOut = () => {
    props.setOpenLogOutPopup(false);
  };

  return (
    <div
      className={`popup log-out--popup ${
        props.active || 'display-popup-false'
      } `}
    >
      <p className="log-out--popup--message">
        Are you sure you want to log out?
      </p>
      <div className="container">
        <button onClick={handleCancelLogOut} className="log-out--popup--cancel">
          Cancel
        </button>
        <button onClick={handleLogout} className="log-out--popup--confirm">
          Log out
        </button>
      </div>
    </div>
  );
}
