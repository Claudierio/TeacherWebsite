import styles from "../Login/Login.module.scss";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import { Link } from "react-router-dom";

export default function Recover() {
  return (
    <div className={styles.container}>
      <div className={styles.leftPanel}>
        <div className={styles.logo}>
          <span>Melhor</span>
          <span>Plataforma</span>
          <span>De português</span>
        </div>
      </div>

      <div className={styles.rightPanel}>
        <h2>Recuperar senha</h2>
        <form>
          <div className={styles.inputGroup}>
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" placeholder="E-mail" required />
            <AlternateEmailOutlinedIcon
              className={styles.icon}
              sx={{
                width: 18,
                height: 18,
              }}
            />
          </div>

          <div className={styles.actionGroup}>
            <button type="submit" className={styles.recoverButton}>
              Enviar
            </button>
            <div className={styles.loginLink}>
              <Link to="/login" className={styles.forgotPassword}>
                <span> Voltar para o login</span>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
