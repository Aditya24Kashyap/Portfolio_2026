import StarFourBadge from "../star-four-badge";
import { CardsThreeIcon } from "../phosphorous-icons";

export default function EducationSection() {
  return (
    <div className="mt-8 mb-8 flex w-full flex-col items-start justify-start gap-3">
      <StarFourBadge title="education" icon={<CardsThreeIcon />} />

      <div className="flex w-full flex-col gap-3">
        <div className="flex w-full flex-col gap-1 rounded-2xl border border-gray-200 px-4 py-3">
          <div className="flex w-full items-center justify-between">
            <p className="text-sm font-medium text-black">
              Maharaja Surajmal Institute of Technology
            </p>
            <p className="text-xs text-gray-400">2022 – 2026</p>
          </div>
          <p className="text-xs font-medium text-gray-500">
            B.Tech — Electronics &amp; Communication Engineering
          </p>
          <p className="mt-1 text-xs text-gray-400">
            CGPA: <span className="font-medium text-gray-600">8.95</span> · Delhi, India
          </p>
        </div>

        {/* <div className="flex w-full flex-col gap-1 rounded-2xl border border-gray-200 px-4 py-3">
          <div className="flex w-full items-center justify-between">
            <p className="text-sm font-medium text-black">
              MCL Saraswati Bal Mandir Sr. Sec. School
            </p>
            <p className="text-xs text-gray-400">2021</p>
          </div>
          <p className="text-xs font-medium text-gray-500">Class XII — CBSE</p>
          <p className="mt-1 text-xs text-gray-400">
            Score: <span className="font-medium text-gray-600">78.8%</span> · Delhi, India
          </p>
        </div>

        <div className="flex w-full flex-col gap-1 rounded-2xl border border-gray-200 px-4 py-3">
          <div className="flex w-full items-center justify-between">
            <p className="text-sm font-medium text-black">
              MCL Saraswati Bal Mandir Sr. Sec. School
            </p>
            <p className="text-xs text-gray-400">2021</p>
          </div>
          <p className="text-xs font-medium text-gray-500">Class X — CBSE</p>
          <p className="mt-1 text-xs text-gray-400">
            Score: <span className="font-medium text-gray-600">86.8%</span> · Delhi, India
          </p>
        </div> */}
      </div>
    </div>
  );
}
