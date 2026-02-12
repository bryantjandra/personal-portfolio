import type { WorkExperience } from "../../types";
import styles from "./WorkItem.module.css";

interface WorkItemProps {
  data: WorkExperience;
}

export default function WorkItem({ data }: WorkItemProps) {
  return (
    <div className={styles.container}>
      <div className={styles.leftGroup}>
        <img src={data.logo} alt={data.company} className={styles.logo} />
        <span>{data.company}</span>
        <span className={styles.role}>{data.role}</span>
      </div>
      <span className={styles.date}>{data.date}</span>
    </div>
  );
}
