import WorkItem from "./WorkItem";
import { experiences } from "../data";

export default function WorkSection() {
  return experiences.map((exp) => <WorkItem key={exp.company} data={exp} />);
}
