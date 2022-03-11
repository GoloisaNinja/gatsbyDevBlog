import React from "react";
import { Headline, Layout, ArticleCardGrid, Seo } from "components";

export default function IndexPage() {
  return (
    <Layout page={`landing`}>
      <Seo
        description={"Developer blog by an errant programmer"}
        title={"Jcodes Blog Homepage"}
        lang="en"
      />
      <Headline />
      <ArticleCardGrid isLanding={true} />
    </Layout>
  );
}
