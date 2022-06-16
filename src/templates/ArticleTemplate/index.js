import React, { useEffect } from "react";
import { graphql, navigate } from "gatsby";
import { ArticleLayout, Seo } from "components";
import ReactMarkdown from "react-markdown";
import Img from "gatsby-image";
import NewButton from "../../components/NewButton";
import Theme from "../../components/Theme";
import { FaTwitter } from "react-icons/fa";
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";
import {
  ArticleImageWrapper,
  ArticleTitleContentWrapper,
  ArticleContentWrapper,
  Title,
  AuthorWrapper,
  AuthorAvatarWrapper,
  ByLineTwitterWrapper,
  ButtonWrapper,
} from "./styles";
import BackgroundImage from "gatsby-background-image";

export const query = graphql`
  query ArticleQuery($articleId: String) {
    strapiArticle(id: { eq: $articleId }) {
      ...StrapiArticleFields
    }
  }
`;

export default function ArticleTemplate({ data }) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  const regex = new RegExp(/\s/gm);
  const articleTitle = data.strapiArticle.title.replace(regex, "_");
  const handleClick = () => {
    navigate("/all-articles");
  };
  return (
    <Theme>
      <ArticleLayout>
        <Seo
          description={data.strapiArticle.id}
          title={data.strapiArticle.title}
          pageUrl={`https://jcodes.blog/articles/${articleTitle}`}
          articleImage={
            `https://jcodes.blog` +
            data.strapiArticle.image.localFile.childImageSharp.fluid.srcWebp
          }
          lang="en"
        />
        <ButtonWrapper>
          <NewButton handleClick={handleClick} text="ALL ARTICLES" />
        </ButtonWrapper>

        <ArticleTitleContentWrapper>
          <Title>{data.strapiArticle.title}</Title>
          <AuthorWrapper>
            <AuthorAvatarWrapper>
              <Img
                fluid={
                  data.strapiArticle.author.avatar.localFile.childImageSharp
                    .fluid
                }
                alt="Author Image"
              />
            </AuthorAvatarWrapper>
            <ByLineTwitterWrapper>
              BY {data.strapiArticle.author.username}
              <div>
                <a
                  href="https://twitter.com/GoloisaNinja"
                  alt="Jon's Twitter Page"
                >
                  <FaTwitter />
                </a>
              </div>
            </ByLineTwitterWrapper>
          </AuthorWrapper>
        </ArticleTitleContentWrapper>

        <ArticleImageWrapper>
          <BackgroundImage
            fluid={data.strapiArticle.image.localFile.childImageSharp.fluid}
            alt={
              data.strapiArticle.image.localFile.childImageSharp.fluid
                .originalName
            }
          />
        </ArticleImageWrapper>
        <ArticleContentWrapper>
          <ReactMarkdown children={data.strapiArticle.content} />
        </ArticleContentWrapper>
      </ArticleLayout>
    </Theme>
  );
}
