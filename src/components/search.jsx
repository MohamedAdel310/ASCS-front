import styles from './Search.module.css';

export default function Search({ onChange }) {
  return (
    <div className={styles.search}>
      <div className={styles.container}>
        <form action="">
          <input type="text" placeholder="Search..." onChange={onChange} />
          {/* <button type="submit" onClick={props.onClick}>
            <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
          </button> */}
        </form>
      </div>
    </div>
  );
}
