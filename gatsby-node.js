const path = require("path");

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
  });
};
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const { data } = await graphql(`
    {
      allStrapiArticle {
        edges {
          node {
            id
          }
        }
      }
    }
  `);

  data.allStrapiArticle.edges.forEach(({ node }) => {
    createPage({
      path: `articles/${node.id}`,
      context: {
        articleId: node.id,
      },
      component: path.resolve(`./src/templates/ArticleTemplate/index.js`),
    });
  });
};
