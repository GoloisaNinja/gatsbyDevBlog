import React from "react";
import { Layout, NotFoundHeading, Seo } from "../components";
import Theme from "../components/Theme";

const NotFoundPage = () => {
  return (
    <>
      <Theme>
        <Layout page={"notFound"} bg={true}>
          <Seo
            description={"404 - These are the pages you are looking for..."}
            title={"Jon Collins Dev Blog 404 Page"}
            lang="en"
          />
          <NotFoundHeading />
        </Layout>
      </Theme>
    </>
  );
};

export default NotFoundPage;
