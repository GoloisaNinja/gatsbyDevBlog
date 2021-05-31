import React from "react";
import { Headline, Layout, ArticleCardGrid, Seo } from "components";

export default function IndexPage() {
  return (
    <Layout>
      <Seo
        description={"Developer blog by an errant programmer"}
        title={"Jcodes Blog Homepage"}
      />
      <Headline />
      <ArticleCardGrid />
    </Layout>
  );
}
