// src/components/footer/index.tsx
import React from "react";
import styles from "./footer.module.scss";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';
import TelegramIcon from '@mui/icons-material/Telegram';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logoSection}>
          <img src="/logo-blue.svg" alt="Logo" className={styles.logo} />
        </div>
        <div className={styles.linksSection}>
          <h3>PROFESSOR FERRETTO</h3>
          <nav className={styles.navFooter}>
            <a href="/homepage">Página Inicial</a>
            <a href="#">Termos de uso</a>
            <a href="#">Política de privacidade</a>
            <a href="#">Perguntas Frequentes</a>
            <a href="#">Blog do Ferretto</a>
          </nav>
        </div>
        <div className={styles.contactSection}>
          <h3>ESCREVA PRA GENTE!</h3>
          <p>contato@professorferretto.com.br</p>
        </div>
        <div className={styles.socialSection}>
          <h3>REDES SOCIAIS</h3>
          <div className={styles.socialIcons}>
            <FacebookIcon className={styles.icon} />
            <InstagramIcon className={styles.icon} />
            <YouTubeIcon className={styles.icon} />
            <XIcon className={styles.icon} />
            <TelegramIcon className={styles.icon} />
          </div>
        </div>
      </div>
    </footer>
  );
}
