import { skillGroups } from "~/constants/tools";
import StarFourBadge from "../star-four-badge";
import { LightningIcon } from "../phosphorous-icons";

export default function SkillsSection() {
  return (
    <div className="mt-8 flex w-full flex-col items-start justify-start gap-3">
      <StarFourBadge title="skills" icon={<LightningIcon />} />

      <div className="flex w-full flex-col divide-y divide-gray-100 rounded-2xl border border-gray-200">
        {skillGroups.map((group) => (
          <div
            key={group.group}
            className="flex items-start gap-4 px-4 py-3"
          >
            <span className="w-36 flex-shrink-0 pt-0.5 font-serif text-xs text-gray-400">
              {group.group}
            </span>
            <div className="flex flex-wrap gap-1.5">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
