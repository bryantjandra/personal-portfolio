import type { Project } from "../../types";
import styles from "./ProjectItem.module.css";

interface ProjectItemProps {
  data: Project;
}

export default function ProjectItem({ data }: ProjectItemProps) {
  return (
    <a href={data.url} target="_blank" className={styles.container}>
      <span className={styles.title}>{data.title}</span>
      <span className={styles.description}>{data.description}</span>
    </a>
  );
}
