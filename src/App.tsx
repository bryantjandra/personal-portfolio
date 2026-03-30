import WorkSection from "./components/Work/WorkSection";
import ProjectSection from "./components/Projects/ProjectSection";
import Profile from "./components/Profile/Profile";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <div className={styles.mainContainer}>
        <Profile />
        <ProjectSection />
        <WorkSection />
      </div>
    </>
  );
}

export default App;
