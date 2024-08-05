import styles from "./Free.module.scss";
import { useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function Free() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <div>
      <div className={styles.topLevel}>
        <div className={styles.content}>
          <div className={styles.title}>
            <h1>Para quem são essas</h1>
            <h1>Aulas gratuitas?</h1>
          </div>
          <div className={styles.lists}>
            <div className={styles.card}>
              <img
                src="/ensino-medio.jpg"
                alt="Ensino Médio"
                className={styles.icon}
              />
              <p>Para quem está no Ensino Médio e precisa de um reforço</p>
            </div>

            <div className={styles.card}>
              <img
                src="/vestibular.jpg"
                alt="Vestibular"
                className={styles.icon}
              />
              <p>
                Para quem vai prestar vestibulares de todo o Brasil e a prova do
                ENEM
              </p>
            </div>

            <div className={styles.card}>
              <img src="/concurso.jpg" alt="Concurso" className={styles.icon} />
              <p>Para quem vai prestar concurso público ou qualquer prova</p>
            </div>
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.learnButton}>
              QUERO APRENDER GRATUITAMENTE!
            </button>
          </div>
        </div>

        <div className={styles.questions}>
          <img
            src="/path/to/your/image.png"
            alt="Dúvidas"
            className={styles.questionsImage}
          />
          <div className={styles.title2}>
            <h1>Aqui estão todas as respostas de que você precisa!</h1>
          </div>
          <div className={styles.questionList}>
            <div
              className={styles.questionItem}
              onClick={() => toggleQuestion(0)}
            >
              <div className={styles.questionHeader}>
                <h2>Os cursos são de graça mesmo?</h2>
                {openQuestion === 0 ? (
                  <KeyboardArrowUpIcon />
                ) : (
                  <KeyboardArrowDownIcon />
                )}
              </div>
              {openQuestion === 0 && (
                <p>
                  Sim! Os cursos de Matemática, de Física e de Química são
                  totalmente gratuitos, e você não precisará nunca pagar por
                  eles.
                </p>
              )}
            </div>
            <div
              className={styles.questionItem}
              onClick={() => toggleQuestion(1)}
            >
              <div className={styles.questionHeader}>
                <h2>
                  Por que eu preciso colocar meu email e telefone no cadastro?
                </h2>
                {openQuestion === 1 ? (
                  <KeyboardArrowUpIcon />
                ) : (
                  <KeyboardArrowDownIcon />
                )}
              </div>
              {openQuestion === 1 && (
                <p>
                  Precisamos dessas informações para garantir a sua matrícula e
                  manter você informado sobre as atualizações dos cursos.
                </p>
              )}
            </div>
            <div
              className={styles.questionItem}
              onClick={() => toggleQuestion(2)}
            >
              <div className={styles.questionHeader}>
                <h2>Vai haver mais cursos gratuitos no futuro?</h2>
                {openQuestion === 2 ? (
                  <KeyboardArrowUpIcon />
                ) : (
                  <KeyboardArrowDownIcon />
                )}
              </div>
              {openQuestion === 2 && (
                <p>
                  Sim, estamos sempre trabalhando para oferecer mais cursos
                  gratuitos em diversas áreas.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
