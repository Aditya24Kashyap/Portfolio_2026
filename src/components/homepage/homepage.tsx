import AiToolsList from "~/components/ai-tools-list";
import Social from "~/components/homepage/social";
import ToolsList from "~/components/homepage/tools-list";
import React from "react";
import HeroBanner from "../hero-banner";
import Bio from "./bio";
import Projects from "./projects/projects";

export const metadata = {
  title: "Home | Aditya Kashyap - Software Engineering Student",
  description: "Portfolio | Aditya Kashyap - Software Engineering Student",
};

export default async function Homepage() {
  return (
    <React.Fragment>
      <HeroBanner
        title="Aditya Kashyap"
        subtitle="Full Stack Developer • Computer Networking • System Design • DSA"
        openToWork={true}
      />
      <Bio />
      <Social />
      <Projects />
      <ToolsList />
      <AiToolsList />
    </React.Fragment>
  );
}
