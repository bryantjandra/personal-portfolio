import WorkItem from "./WorkItem";
import { experiences } from "../../data";
import styles from "./WorkSection.module.css";

export default function WorkSection() {
  return (
    <>
      <h3 className={styles.title}>WORK</h3>
      <div className={styles.list}>
        {experiences.map((exp) => (
          <WorkItem key={exp.company} data={exp} />
        ))}
      </div>
    </>
  );
}
