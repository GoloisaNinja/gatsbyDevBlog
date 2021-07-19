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
            title
          }
        }
      }
    }
  `);

  data.allStrapiArticle.edges.forEach(({ node }) => {
    const regex = new RegExp(/\s/gm);
    const articleTitle = node.title.replace(regex, "_");
    createPage({
      path: `articles/${articleTitle}`,
      context: {
        articleId: node.id,
      },
      component: path.resolve(`./src/templates/ArticleTemplate/index.js`),
    });
  });
};
