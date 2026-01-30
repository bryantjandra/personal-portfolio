import type { WorkExperience } from "../types";

interface WorkItemProps {
  data: WorkExperience;
}

export default function WorkItem({ data }: WorkItemProps) {
  return (
    <div>
      {data.logo} {data.company} {data.role} {data.date}
    </div>
  );
}
