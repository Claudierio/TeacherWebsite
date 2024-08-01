import React from "react";
import styles from "./Login.module.scss";
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';

const Login = () => {
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
        <h2>Faça seu login</h2>
        <form>
          <div className={styles.inputGroup}>
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" placeholder="E-mail" required />
            <AlternateEmailOutlinedIcon className={styles.icon}
            sx={{
              width: 18,
              height: 18,
            }}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password">Senha</label>
            <input type="password" id="password" placeholder="Senha" required />
            <LockOutlinedIcon className={styles.icon} 
            sx={{
              width: 18,
              height: 18,
            }} 
            />
          </div>
          <div className={styles.actionGroup}>
            <button type="submit" className={styles.loginButton}>
              Entrar
            </button>
            <a href="#" className={styles.forgotPassword}>
              Esqueci minha senha
            </a>
          </div>
        </form>
        <a href="#" className={styles.registerLink}>
          Não tem uma conta? <span>Cadastre-se</span> 
        </a>
      </div>
    </div>
  );
};

export default Login;
