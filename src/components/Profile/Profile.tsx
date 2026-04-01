import styles from "./Profile.module.css";
import { PiGithubLogo, PiLinkedinLogo } from "react-icons/pi";
import { CiMail } from "react-icons/ci";

export default function Profile() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.leftSection}>
          <img src="/linkedinHeadshot.jpeg" className={styles.image} />
          <div className={styles.logos}>
            <a
              href="https://github.com/bryantjandra"
              target="_blank"
              className={styles.logoImageLink}
            >
              <PiGithubLogo className={styles.logoImage} />
            </a>
            <a
              href="https://www.linkedin.com/in/bryantjandra/"
              target="_blank"
              className={styles.logoImageLink}
            >
              <PiLinkedinLogo className={styles.logoImage} />
            </a>
            <a
              href="mailto:tjandrabryan112@gmail.com"
              className={styles.logoImageLink}
            >
              <CiMail className={styles.logoImage} />
            </a>
          </div>
        </div>

        <div className={styles.subContainer}>
          <p className={styles.name}>Benedict Bryan Tjandra</p>
          <p className={styles.description}>
            • I am a software engineer (ai + fullstack) currently building
            ai-native solutions at {""}
            <a
              className={styles.underlinedText}
              href="https://lifeattiktok.com/"
              target="__blank"
            >
              TikTok
            </a>{" "}
          </p>
          <p className={styles.description}>
            • Graduated from the {""}
            <a
              className={styles.underlinedText}
              href="https://www.comp.nus.edu.sg/bytes/nus-computing-clinches-1st-spot-in-asia-and-4th-worldwide/"
              target="__blank"
            >
              National University of Singapore
            </a>{" "}
            {""} with a Bachelor's in Computer Science where I was ranked {""}
            <b>top 5%</b> {""}
            of my entire cohort.
          </p>
          <p className={styles.description}>• Currently, TODO TODO</p>
        </div>
      </div>
    </>
  );
}
