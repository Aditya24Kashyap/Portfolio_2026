import React from "react";
import HeroBanner from "~/components/hero-banner";
import Connect from "~/components/connect/connect";

export const metadata = {
  title: "Connect | Aditya Kashyap — Software Engineer",
  description: "Get in touch with Aditya Kashyap — open to SWE fresher roles, collaborations, and open source.",
};

export default function ExperiencePage() {
  return (
    <React.Fragment>
      <HeroBanner title="Connect" subtitle="let's connect!" openToWork={true} />
      <Connect />
    </React.Fragment>
  );
}
