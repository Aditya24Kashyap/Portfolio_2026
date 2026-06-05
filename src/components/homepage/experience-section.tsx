import { experienceList } from "~/constants/experience";
import StarFourBadge from "../star-four-badge";
import { SparkleIcon } from "../phosphorous-icons";

export default function ExperienceSection() {
  return (
    <div className="mt-8 flex w-full flex-col items-start justify-start gap-3">
      <StarFourBadge title="experience" icon={<SparkleIcon />} />

      <div className="flex w-full flex-col gap-3">
        {experienceList.map((exp) => (
          <div
            key={exp.name}
            className="flex w-full flex-col gap-1 rounded-2xl border border-gray-200 px-4 py-3"
          >
            <div className="flex w-full items-center justify-between">
              <p className="text-sm font-medium text-black">{exp.name}</p>
              <p className="text-xs text-gray-400">{exp.date}</p>
            </div>
            <p className="text-xs font-medium text-gray-500">{exp.position}</p>
            {exp.description && (
              <p className="mt-1 text-xs leading-relaxed text-gray-400">
                {exp.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
