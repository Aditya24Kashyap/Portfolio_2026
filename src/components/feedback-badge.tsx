import { GithubLogoIcon } from "./phosphorous-icons";
import Link from "next/link";
import { socialLinkEnum } from "~/constants";

export default function FeedbackBadge() {
  return (
    <div className="mt-16 rounded-4xl bg-gray-100 px-4 py-2 text-xs">
      <p className="flex items-center gap-1 text-gray-600">
        Found something interesting? Let&apos;s connect on{" "}
        <Link
          href={socialLinkEnum.github}
          rel="noopener noreferrer"
          target="_blank"
          className="font-medium text-black hover:underline"
        >
          <GithubLogoIcon />
        </Link>
      </p>
    </div>
  );
}
