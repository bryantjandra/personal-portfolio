import type { Project } from "../../types";
import styles from "./ProjectItem.module.css";
import { IoIosArrowDropdown } from "react-icons/io";
import { IoIosArrowDropup } from "react-icons/io";
import { useState } from "react";

interface ProjectItemProps {
  data: Project;
}

export default function ProjectItem({ data }: ProjectItemProps) {
  const [showDescription, setShowDescription] = useState(false);

  function handleClick() {
    setShowDescription(!showDescription);
  }

  return (
    <>
      <div className={styles.container}>
        <a href={data.url} target="_blank" className={styles.containerLink}>
          <span className={styles.title}>{data.title}</span>
          <span className={styles.description}>{data.description}</span>
        </a>
        <button className={styles.buttonIcon} onClick={handleClick}>
          <IoIosArrowDropdown
            className={showDescription ? styles.arrowUp : styles.arrowDropdown}
          />
        </button>
      </div>

      <div
        className={
          showDescription
            ? styles.fullDescription
            : styles.fullDescriptionHidden
        }
      >
        {" "}
        {data.completeDescription.map((desc) => {
          return <div>• {desc}</div>;
        })}
      </div>
    </>
  );
}
