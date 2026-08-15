import React from "react";
import { Headline, Layout, ArticleCardGrid, Seo } from "components";
import Theme from "../components/Theme";

export default function IndexPage() {
  return (
    <>
      <Theme>
        <Layout page={`landing`}>
          <Seo
            description={"Developer blog by an errant programmer"}
            title={"Jcodes Blog Homepage"}
            lang="en"
          />
          <Headline />
          <ArticleCardGrid isLanding={true} />
        </Layout>
      </Theme>
    </>
  );
}
