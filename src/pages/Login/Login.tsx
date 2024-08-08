import { useState } from "react";
import styles from "./Login.module.scss";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined"; // Importa o ícone de cadeado aberto
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [inputError, setInputError] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // Estado para controlar a visibilidade da senha
  const navigate = useNavigate();
  const { setUser } = useUser();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/students/login", { email, password });
      console.log("Login response:", response);
      if (response.status === 200) {
        setError("");
        setInputError(false);
        const { name, token } = response.data;
        setUser({ name });
        localStorage.setItem("user", JSON.stringify({ name, token }));
        console.log("User set:", { name });
        navigate('/');
      }
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        if (error.response && error.response.status === 400) {
          setError("Senha inválida");
        } else if (error.response && error.response.status === 404) {
          setError("Usuário não encontrado");
        } else {
          setError("Erro ao fazer login. Tente novamente.");
        }
        setInputError(true);
      } else {
        setError("Erro inesperado. Tente novamente.");
        setInputError(true);
      }
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev); // Alterna entre mostrar ou esconder a senha
  };

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
        <form onSubmit={handleSubmit}>
          <div className={`${styles.inputGroup} ${inputError ? styles.inputError : ''}`}>
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <AlternateEmailOutlinedIcon
              className={styles.icon}
              sx={{
                width: 18,
                height: 18,
              }}
            />
          </div>
          <div className={`${styles.inputGroup} ${inputError ? styles.inputError : ''}`}>
            <label htmlFor="password">Senha</label>
            <input
              type={showPassword ? "text" : "password"} // Altera o tipo do input com base no estado
              id="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {showPassword ? (
              <LockOpenOutlinedIcon
                className={styles.icon}
                onClick={togglePasswordVisibility} // Alterna o ícone quando clicado
                sx={{
                  width: 18,
                  height: 18,
                  cursor: "pointer",
                }}
              />
            ) : (
              <LockOutlinedIcon
                className={styles.icon}
                onClick={togglePasswordVisibility} // Alterna o ícone quando clicado
                sx={{
                  width: 18,
                  height: 18,
                  cursor: "pointer",
                  zIndex: 1000,
                }}
              />
            )}
          </div>
          {error && <div className={styles.errorMessage}>{error}</div>}
          <div className={styles.actionGroup}>
            <button type="submit" className={styles.loginButton}>
              Entrar
            </button>
            <Link to='/recover' className={styles.forgotPassword}>
              Esqueci minha senha
            </Link>
          </div>
        </form>
        <div className={styles.registerLink}>
          Não tem uma conta?{" "}
          <Link to="/register" className={styles.linkToRegister}>
            <span>Cadastre-se</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
