import styles from "./ProjectSection.module.css";
import { projects } from "../../data";
import ProjectItem from "./ProjectItem";

export default function ProjectSection() {
  return (
    <>
      <h3 className={styles.title}>PROJECTS</h3>
      <div className={styles.container}>
        {projects.map((proj) => {
          return <ProjectItem key={proj.title} data={proj} />;
        })}
      </div>
    </>
  );
}
