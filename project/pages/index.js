import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />

      <h1>Cursos de Graduação</h1>
    </div>
  );
}
