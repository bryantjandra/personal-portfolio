import type { WorkExperience } from "../types";
import styles from "./WorkItem.module.css";

interface WorkItemProps {
  data: WorkExperience;
}

export default function WorkItem({ data }: WorkItemProps) {
  return (
    <div className={styles.container}>
      <div>
        {data.logo} {data.company} {data.role}
      </div>
      {data.date}
    </div>
  );
}
