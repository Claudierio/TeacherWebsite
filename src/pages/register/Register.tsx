import styles from "./Register.module.scss";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import { Link } from "react-router-dom";

export default function Register() {
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
        <h2>Faça seu cadastro</h2>
        <form>
          <div className={styles.fullName}>
            <div className={styles.inputGroup}>
              <label htmlFor="name">Nome</label>
              <input type="text" id="name" placeholder="Nome" required />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="sobrenome">Sobrenome</label>
              <input
                type="text"
                id="lastname"
                placeholder="Sobrenome"
                required
              />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" placeholder="E-mail" required />
            <AlternateEmailOutlinedIcon
              className={styles.icon}
              style={{
                width: 18,
                height: 18,
              }}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="confirmEmail">Confirmar email</label>
            <input
              type="email"
              id="confirmEmail"
              placeholder="Confirmar E-mail"
              required
            />
            <AlternateEmailOutlinedIcon
              className={styles.icon}
              style={{
                width: 18,
                height: 18,
              }}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="phone">Telefone</label>
            <input
              type="tel"
              id="phone"
              placeholder="(XX) X XXXX-XXXX"
              required
            />
            <PhoneOutlinedIcon
              className={styles.icon}
              style={{
                width: 18,
                height: 18,
              }}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password">Senha</label>
            <input type="password" id="password" placeholder="Senha" required />
            <LockOutlinedIcon
              className={styles.icon}
              style={{
                width: 18,
                height: 18,
              }}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="confirmPassword">Confirmar senha</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirmar senha"
              required
            />
            <LockOutlinedIcon
              className={styles.icon}
              style={{
                width: 18,
                height: 18,
              }}
            />
          </div>
          <div className={styles.actionGroup}>
            <button type="submit" className={styles.registerButton}>
              Cadastrar
            </button>
            <div className={styles.loginLink}>
              Já tem uma conta?
              <Link to="/login" className={styles.linkToLogin}>
                <span> Faça o Login</span>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
