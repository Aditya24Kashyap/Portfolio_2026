import Social from "~/components/homepage/social";
import React from "react";
import HeroBanner from "../hero-banner";
import Bio from "./bio";
import Projects from "./projects/projects";
import SkillsSection from "./skills";
import ExperienceSection from "./experience-section";
import EducationSection from "./education-section";

export const metadata = {
  title: "Aditya Kashyap — Software Engineer",
  description:
    "Final-year B.Tech student at MSIT Delhi. Builds production-grade systems in C++ and full-stack web. 300+ LeetCode, contest rating 1800+. Open to SWE fresher roles.",
};

export default async function Homepage() {
  return (
    <React.Fragment>
      <HeroBanner
        title="Aditya Kashyap"
        subtitle="Software Engineer · C++ · Full Stack · DSA · Open Source · MSIT Delhi '26"
        openToWork={true}
      />
      <Bio />
      <Social />
      <Projects />
      <ExperienceSection />
      <SkillsSection />
      <EducationSection />
    </React.Fragment>
  );
}
