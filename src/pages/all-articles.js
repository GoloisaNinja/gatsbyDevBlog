import React from "react";
import { Layout, Seo, ArticleCardGrid } from "../components";
import Theme from "../components/Theme";

export default function AllArticles() {
  return (
    <>
      <Theme>
        <Layout page={"articles"}>
          <Seo
            description={
              "Find all the articles on Jon Collins Dev Blog. Let the binging begin!"
            }
            pageUrl={`https://jcodes.blog/all-articles`}
            title={"Jon Collins Dev Blog All Articles Page"}
            lang="en"
          />
          <ArticleCardGrid />
        </Layout>
      </Theme>
    </>
  );
}
