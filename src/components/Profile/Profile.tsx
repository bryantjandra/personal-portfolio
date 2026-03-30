import styles from "./Profile.module.css";
import { PiGithubLogo, PiLinkedinLogo } from "react-icons/pi";
import { CiMail } from "react-icons/ci";

export default function Profile() {
  return (
    <>
      <div className={styles.container}>
        <img src="/linkedinHeadshot.jpeg" className={styles.image} />
        <div className={styles.subContainer}>
          <p className={styles.name}>Bryan Tjandra</p>
          <p className={styles.description}>
            I am a software engineer (ai + fullstack) currently building
            ai-native solutions at TikTok.
          </p>
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
      </div>
    </>
  );
}
