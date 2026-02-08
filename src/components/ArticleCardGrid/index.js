import React, { useContext } from "react";
import ArticleContext from "../../context/ArticleContext";
import {
  SectionWrapper,
  WavesWrapper,
  ArticlesGridWrapper,
  ArticleLead,
} from "./styles";
import { ArticleCard } from "../ArticleCard";

export function ArticleCardGrid({ isLanding }) {
  const { articles } = useContext(ArticleContext);
  const featuredArticles = articles.filter(article => article.isFeatured);
  return (
    <SectionWrapper>
      <WavesWrapper>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
        </svg>
      </WavesWrapper>
      <ArticleLead>
        <h4>{isLanding ? "Featured Articles" : "All Articles"}</h4>
      </ArticleLead>
      <ArticlesGridWrapper>
        {isLanding
          ? featuredArticles.map(article => (
              <ArticleCard
                key={article.strapiId}
                id={article.id}
                title={article.title}
                previewContent={article.preview}
                author={article.author.username}
                readTime={article.readTime}
                imageFluid={article.image.localFile.childImageSharp.fluid}
                imageAlt={
                  article.image.localFile.childImageSharp.fluid.originalName
                }
                createdAt={article.created_at.slice(0, 10)}
              />
            ))
          : articles.map(article => (
              <ArticleCard
                key={article.strapiId}
                id={article.id}
                title={article.title}
                previewContent={article.preview}
                author={article.author.username}
                readTime={article.readTime}
                imageFluid={article.image.localFile.childImageSharp.fluid}
                imageAlt={
                  article.image.localFile.childImageSharp.fluid.originalName
                }
                createdAt={article.created_at.slice(0, 10)}
              />
            ))}
      </ArticlesGridWrapper>
    </SectionWrapper>
  );
}
