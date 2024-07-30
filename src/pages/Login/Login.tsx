import React from "react";
import styles from "./Login.module.scss";

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftPanel}>
        <div className={styles.logo}>
          <span>F</span>
        </div>
      </div>
      <div className={styles.rightPanel}>
        <h2>Faça seu login</h2>
        <form>
          <div className={styles.inputGroup}>
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" placeholder="E-mail" required />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password">Senha</label>
            <input type="password" id="password" placeholder="Senha" required />
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
