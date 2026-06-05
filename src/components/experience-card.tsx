import Image from "next/image";

export default function ExperienceCard({
  name,
  logo,
  position,
  date,
  description,
}: {
  name: string;
  logo: string;
  position: string;
  date: string;
  description?: string;
}) {
  return (
    <div className="flex w-full items-start justify-start gap-3 rounded-2xl border border-gray-200 px-4 py-3">
      <Image
        src={logo}
        width={40}
        height={40}
        className="mt-0.5 flex-shrink-0 rounded-full"
        alt={`${name} logo`}
      />

      <div className="w-full">
        <div className="flex w-full items-center justify-between">
          <p className="text-sm font-medium">{name}</p>
          <p className="text-sm opacity-50">{date}</p>
        </div>
        <p className="text-xs text-gray-600">{position}</p>
        {description && (
          <p className="mt-1.5 text-xs leading-relaxed text-gray-500">{description}</p>
        )}
      </div>
    </div>
  );
}
