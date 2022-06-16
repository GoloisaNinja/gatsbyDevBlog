import React from "react";
import { Layout, AboutHeading, AboutContent, Seo } from "components";

export default function AboutPage() {
  return (
    <Layout page="about">
      <Seo
        description={
          "All about Jon and his shortcomings...I mean accomplishments."
        }
        pageUrl={`https://jcodes.blog/about`}
        title={"About Jcodes"}
        lang="en"
      />
      <AboutHeading />
      <AboutContent />
    </Layout>
  );
}
