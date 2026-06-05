import React from "react";
import HeroBanner from "~/components/hero-banner";
import ExperienceList from "~/components/experience-list";

export const metadata = {
  title: "Experience | Aditya Kashyap — Software Engineer",
  description:
    "Open source contributor at GSSoC Extended 2025. AI/ML training at YBI Foundation. Final-year B.Tech ECE at MSIT Delhi.",
};

export default function ExperiencePage() {
  return (
    <React.Fragment>
      <HeroBanner
        title="Experience"
        subtitle="open source · internships · training"
        openToWork={true}
      />
      <ExperienceList />
    </React.Fragment>
  );
}
