import React, { createContext } from "react";
import { graphql, useStaticQuery } from "gatsby";

const query = graphql`
  query {
    allStrapiArticle(sort: { fields: created_at, order: DESC }) {
      edges {
        node {
          ...StrapiArticleFields
        }
      }
    }
  }
`;
const defaultState = {
  articles: [],
};

const ArticleContext = createContext(defaultState);
export default ArticleContext;

export function ArticleContextProvider({ children }) {
  const { allStrapiArticle } = useStaticQuery(query);
  return (
    <ArticleContext.Provider
      value={{ articles: allStrapiArticle.edges.map(({ node }) => node) }}
    >
      {children}
    </ArticleContext.Provider>
  );
}
