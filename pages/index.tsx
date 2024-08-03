import styles from './index.module.css'

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <img src='/nawy.svg'></img>
        <h1 className={styles.title}>Welcome to This Test App</h1>
        <h2 className={styles.subtitle}>I'm glad to have you here!</h2>
        <h2 className={styles.subtitle2}>Feel free to navigate through the app to </h2>
        <h2 className={styles.subtitle2}> enjoy the design and animations!</h2>

      </div>
    </div>
  );
}
