import React from "react";
import { AboutLayout, AboutHeading, AboutContent, Seo } from "components";

export default function AboutPage() {
  return (
    <AboutLayout>
      <Seo
        description={
          "All about Jon and his shortcomings...I mean accomplishments."
        }
        title={"About Jcodes"}
      />
      <AboutHeading />
      <AboutContent />
    </AboutLayout>
  );
}
