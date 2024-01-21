import styles from './NoResponseImg.module.css';

export default function NoResponseComp() {
  return (
    <img
      src="/image/noResponse.jpg"
      alt="no violations in this day"
      className={styles.img}
      style={{ display: 'block' }}
    />
  );
}
