import styles from './LogOutPopup.module.css';

export default function LogOutPopup(props) {
  const handleLogout = () => {
    props.setOpenLogOutPopup(false);

    localStorage.removeItem('token');
  };

  const handleCancelLogOut = () => {
    props.setOpenLogOutPopup(false);
  };

  return (
    <div className={`popup ${styles.container} ${props.active || 'dis-none'} `}>
      <p className={styles.message}>Are you sure you want to log out?</p>
      <div className={styles.content}>
        <button onClick={handleCancelLogOut} className={styles.cancel}>
          Cancel
        </button>
        <button onClick={handleLogout} className={styles.confirm}>
          Log out
        </button>
      </div>
    </div>
  );
}
