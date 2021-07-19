import React from "react";
import { graphql, navigate } from "gatsby";
import { ArticleLayout, Seo, Button } from "components";
import ReactMarkdown from "react-markdown";
import Img from "gatsby-image";
import { FaTwitter } from "react-icons/fa";
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
  return (
    <ArticleLayout>
      <Seo
        description={data.strapiArticle.id}
        title={data.strapiArticle.title}
        articleImage={
          `https://jcodes.blog` +
          data.strapiArticle.image.localFile.childImageSharp.fluid.srcWebp
        }
      />
      <ButtonWrapper>
        <Button onClick={() => navigate("/")}>Back to articles</Button>
      </ButtonWrapper>

      <ArticleTitleContentWrapper>
        <Title>{data.strapiArticle.title}</Title>
        <AuthorWrapper>
          <AuthorAvatarWrapper>
            <Img
              fluid={
                data.strapiArticle.author.avatar.localFile.childImageSharp.fluid
              }
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
        />
      </ArticleImageWrapper>
      <ArticleContentWrapper>
        <ReactMarkdown children={data.strapiArticle.content} />
      </ArticleContentWrapper>
    </ArticleLayout>
  );
}
