import styles from "./Register.module.scss";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useUser } from "../../context/UserContext";

export default function Register() {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { setUser } = useUser();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email !== confirmEmail) {
      setError("Os e-mails não correspondem.");
      return;
    }
    if (password !== confirmPassword) {
      setError("As senhas não correspondem.");
      return;
    }
    try {
      const response = await axios.post("http://localhost:5000/students", {
        name,
        lastname,
        email,
        confirmEmail,
        phone,
        password,
        confirmPassword,
      });
      if (response.status === 201) {
        // Sucesso na criação
        console.log(response.data);
        const { name, token } = response.data;
        setUser({ name });
        sessionStorage.setItem("user", JSON.stringify({ name, token }));
        navigate("/"); // Redirecionar para a homepage logado
      }
    } catch (err) {
      setError("Registro falhou. Por favor, tente novamente.");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
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
        <h2>Faça seu cadastro</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.fullName}>
            <div className={styles.inputGroup}>
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                id="name"
                placeholder="Nome"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="lastname">Sobrenome</label>
              <input
                type="text"
                id="lastname"
                placeholder="Sobrenome"
                required
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              placeholder="E-mail"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            <label htmlFor="confirmEmail">Confirmar email</label>
            <input
              type="email"
              id="confirmEmail"
              placeholder="Confirmar E-mail"
              required
              value={confirmEmail}
              onChange={(e) => setConfirmEmail(e.target.value)}
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
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
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
            <input
              type={showPassword ? "text" : "password"} 
              id="password"
              placeholder="Senha"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {showPassword ? (
              <LockOpenOutlinedIcon
                className={styles.icon}
                onClick={togglePasswordVisibility}
                sx={{
                  width: 18,
                  height: 18,
                  cursor: "pointer",
                }}
              />
            ) : (
              <LockOutlinedIcon
                className={styles.icon}
                onClick={togglePasswordVisibility}
                sx={{
                  width: 18,
                  height: 18,
                  cursor: "pointer",
                }}
              />
            )}
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="confirmPassword">Confirmar senha</label>
            <input
              type={showPassword ? "text" : "password"} 
              id="confirmPassword"
              placeholder="Confirmar senha"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {showPassword ? (
              <LockOpenOutlinedIcon
                className={styles.icon}
                onClick={togglePasswordVisibility}
                sx={{
                  width: 18,
                  height: 18,
                  cursor: "pointer",
                }}
              />
            ) : (
              <LockOutlinedIcon
                className={styles.icon}
                onClick={togglePasswordVisibility}
                sx={{
                  width: 18,
                  height: 18,
                  cursor: "pointer",
                }}
              />
            )}
          </div>
          {error && <p>{error}</p>}
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
