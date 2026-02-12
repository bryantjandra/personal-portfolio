import WorkSection from "./components/Work/WorkSection";
import ProjectSection from "./components/Projects/ProjectSection";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <div className={styles.mainContainer}>
        <ProjectSection />
        <WorkSection />
      </div>
    </>
  );
}

export default App;
