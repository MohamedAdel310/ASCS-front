import styles from './PageNotFound.module.css';

const PageNotFound = () => {
  return (
    <div className={styles.container}>
      <h1>Page not found</h1>
      <p>We're sorry, the page you requested could not be found.</p>
    </div>
  );
};

export default PageNotFound;
