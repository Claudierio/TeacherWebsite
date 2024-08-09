import styles from "./Support.module.scss";
import CheckIcon from "@mui/icons-material/Check";
import TrophyIcon from "@mui/icons-material/EmojiEvents";
import ComputerIcon from "@mui/icons-material/Computer";
import SmileIcon from "@mui/icons-material/EmojiEmotions";
import ClockIcon from "@mui/icons-material/AccessTime";
import PdfIcon from "@mui/icons-material/PictureAsPdf";

export default function Support() {
  return (
    <div className={styles.topLevel}>
      <section className={styles.topSection}>
        <div className={styles.leftSection}>
          <h2>
            Aprenda todo o conteúdo que você precisa para passar de ano 2x mais
            rápido, sem recuperação e provas finais!
          </h2>
          <p>
            De forma <span className={styles.textStrong}>100% online</span> e
            com a metodologia{" "}
            <span className={styles.textStrong}>mais divertida</span> da
            internet.
          </p>
          <button className={styles.buttonAction}>
            Quero me livrar da recuperação
          </button>
          <p>✅Conteúdos completos do 5º ano ao 9º ano.</p>
        </div>
        <div className={styles.rightImage}>
          <img src="/reforco.png" alt="Suporte" />
        </div>
      </section>

      <section className={styles.secondSection}>
        <div className={styles.contentSecondSection}>
          <h2>
            Substitua suas aulas particulares caras por um curso completo com o
            melhor professor de português da internet.
          </h2>
        </div>
      </section>

      <section className={styles.benefitsSection}>
        <h2>O que você ganha ao fazer o curso do Professor Noslen?</h2>
        <div className={styles.benefitsGrid}>
          <div className={styles.benefitItem}>
            <div className={styles.iconContainer}>
              <TrophyIcon
                className={styles.iconTrophy}
                sx={{
                  width: "50.63px",
                  height: "45px",
                }}
              />
            </div>
            <p>
              Você nunca mais vai ficar de recuperação em língua portuguesa.
            </p>
          </div>
          <div className={styles.benefitItem}>
            <div className={styles.iconContainer}>
              <SmileIcon
                className={styles.iconSmile}
                sx={{
                  width: "44px",
                  height: "45px",
                }}
              />
            </div>
            <p>Não ficará mais nervoso e inseguro na hora das provas.</p>
          </div>
          <div className={styles.benefitItem}>
            <div className={styles.iconContainer}>
              <CheckIcon
                className={styles.iconCheck}
                sx={{
                  width: "56.25px",
                  height: "45px",
                }}
              />
            </div>
            <p>Terá macetes divertidos para gravar os conteúdos mais chatos.</p>
          </div>
          <div className={styles.benefitItem}>
            <div className={styles.iconContainer}>
              <ComputerIcon
                className={styles.iconComputer}
                sx={{
                  width: "56.25px",
                  height: "45px",
                }}
              />
            </div>
            <p>
              Aprenderá com aulas dinâmicas e editadas, totalmente diferentes
              das aulas chatas que você está acostumado.
            </p>
          </div>
          <div className={styles.benefitItem}>
            <div className={styles.iconContainer}>
              <ClockIcon
                className={styles.iconClock}
                sx={{
                  width: "45px",
                  height: "45px",
                }}
              />
            </div>
            <p>
              Seu aprendizado será facilitado com aulas curtas e direto ao
              ponto.
            </p>
          </div>
          <div className={styles.benefitItem}>
            <div className={styles.iconContainer}>
              <PdfIcon
                className={styles.iconPdf}
                sx={{
                  width: "33.75px",
                  height: "45px",
                }}
              />
            </div>
            <p>Todas as aulas trazem material de apoio em PDF.</p>
          </div>
        </div>
        <button className={styles.buttonAction} style={{ marginTop: "2rem" }}>
          Quero me livrar da recuperação
        </button>
      </section>

      <section className={styles.WhatYourLearn}>
        
      </section>
    </div>
  );
}
