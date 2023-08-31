import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <header className={styles.header}>
        <div>
          <h1>
            <span>
              Hola<span className={styles.yellowText}>.</span>
            </span>
            <br />
            <span>
              <span>soy</span>
            </span>
            <br />
            <span>Gerardo Gómez</span>
          </h1>
        </div>
      </header>
      <section className={styles.infosection}>
        <img
        src="mi honesta reacion.jpg"
        alt="imagen"
        classname={styles.Image}
        />
        <div className={styles.infocontainer}>
          <span className={styles.title + " " + styles.yellowText}>Gerardo</span>
          <br />
          <span classname={styles.title}>Gómez</span>
          </div>
            <ul>
            <li>
              <span className={styles.grayText}>Edad:</span> 17
            </li>
            <li>
              <span className={styles.grayText}>Nacionalidad:</span> Guatemalteco
            </li>
            <li>
            <span className={styles.grayText}>Habilidades:</span> no se va
            </li>
            <li>
            <span className={styles.grayText}>Lenguajes:</span> Español e ingles
            </li>
          </ul>
      </section>
        <div>
          <span>Gerado</span>
          <br />
          <span>Gomez</span>
          </div>
    </main>
  );
}