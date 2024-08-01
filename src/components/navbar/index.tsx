// src/components/navbar/index.tsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./navbar.module.scss";
import PersonIcon from "@mui/icons-material/Person";

export default function Navbar() {
  const location = useLocation();

  return (
    <div className={styles.toplevel}>
      <Link to="/">
        <img src="/logo-blue.svg" alt="Logo" className={styles.logoImg} />
      </Link>
      <nav className={styles.navbar}>
        <div className={styles.navleft}>
          <Link
            to="/"
            className={`${styles.navLink} ${
              location.pathname === "/" ? styles.active : ""
            }`}
          >
            <span>Início</span>
          </Link>

          <Link
            to="/concursos"
            className={`${styles.navLink} ${
              location.pathname === "/concursos" ? styles.active : ""
            }`}
          >
            <span>Concursos</span>
          </Link>

          <Link
            to="/reforco-escolar"
            className={`${styles.navLink} ${
              location.pathname === "/reforco-escolar" ? styles.active : ""
            }`}
          >
            <span>Reforço Escolar</span>
          </Link>

          <Link
            to="/reforco-escolar"
            className={`${styles.navLink} ${
              location.pathname === "/aulas-gratuitas" ? styles.active : ""
            }`}
          >
            <span>Aulas Gratuitas</span>
          </Link>
        </div>

        <div className={styles.navright}>
          <Link
            to="/register"
            className={`${styles.navLink} ${
              location.pathname === "/register" ? styles.active : ""
            }`}
          >
            <span className={styles.studentButton}>Assine</span>
          </Link>
          <Link
            to="/login"
            className={`${styles.navLink} ${
              location.pathname === "/login" ? styles.active : ""
            }`}
          >
            <span>Já sou aluno</span>
            <PersonIcon />
          </Link>
        </div>
      </nav>
    </div>
  );
}
