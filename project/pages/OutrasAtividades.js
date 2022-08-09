import Link from "next/link";
import AccordionAtividades from "../components/AccordionAtividades";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/ProjetoPedagogico.module.css";
import React, { useState } from "react";

export default function OutrasAtividades() {
  const [active, setActive] = useState("Periódicos Online");

  return (
    <>
      <div>
        <Navbar />

        <div className="espacemento">
          <section className={styles.body}>
            <p className="">Outras Atividades</p>
            <h1>Conheça as outras atividades do curso de Medicina</h1>
            <hr />
          </section>

          <section className={styles.periodico}>
            <h1>Atividades</h1>
            <hr />
            <AccordionAtividades
              title="Periódicos Online"
              active={active}
              setActive={setActive}
            />
            <AccordionAtividades
              title="Periódicos Online2"
              active={active}
              setActive={setActive}
            />
          </section>
        </div>
      </div>
    </>
  );
}
