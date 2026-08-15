import React, { useEffect, useState, useCallback } from "react";
import { graphql, navigate } from "gatsby";
import { ArticleLayout, Seo } from "components";
import ReactMarkdown from "react-markdown";
import Img from "gatsby-image";
import NewButton from "../../components/NewButton";
import Theme from "../../components/Theme";
import { FaMastodon } from "react-icons/fa";
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
  GalleryGrid,
  Thumbnail,
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
  const [imgUrls, setImgUrls] = useState([]);
  const buildURLStringArray = useCallback(() => {
    setImgUrls(data.strapiArticle.galleryURLS.split(";"));
  }, [data.strapiArticle.galleryURLS]);
  useEffect(() => {
    Prism.highlightAll();
    if (data.strapiArticle.hasGallery) {
      buildURLStringArray();
    }
  }, [buildURLStringArray, data.strapiArticle.hasGallery]);
  const regex = new RegExp(/\s/gm);
  const articleTitle = data.strapiArticle.title.replace(regex, "_");
  const handleClick = () => {
    navigate("/all-articles");
  };
  return (
    <Theme>
      <ArticleLayout>
        <Seo
          description={data.strapiArticle.preview}
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
                  href="https://hachyderm.io/@joncollinsdev"
                  alt="Follow Jon on Hachyderm.io"
                >
                  <FaMastodon />
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
          {imgUrls.length > 0 && (
            <>
              <h3>More Images</h3>
              <GalleryGrid>
                {imgUrls.map((url, index) => (
                  <a
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="click to see the full size image"
                    key={index}
                  >
                    <Thumbnail src={url} />
                  </a>
                ))}
              </GalleryGrid>
            </>
          )}
        </ArticleContentWrapper>
      </ArticleLayout>
    </Theme>
  );
}
