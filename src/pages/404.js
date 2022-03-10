import React from "react";
import { Layout } from "../components";
import { NotFoundHeading } from "../components";
import Theme from "../components/Theme";

const NotFoundPage = () => {
  return (
    <>
      <Theme>
        <Layout page={"notFound"} bg={true}>
          <NotFoundHeading />
        </Layout>
      </Theme>
    </>
  );
};

export default NotFoundPage;
