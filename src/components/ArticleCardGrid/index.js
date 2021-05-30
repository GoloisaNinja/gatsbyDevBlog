import React, { useContext } from "react";
import ArticleContext from "../../context/ArticleContext";
import { ArticlesGridWrapper } from "./styles";
import { ArticleCard } from "../ArticleCard";

export function ArticleCardGrid() {
  const { articles } = useContext(ArticleContext);
  return (
    <ArticlesGridWrapper>
      {articles.map(article => (
        <ArticleCard
          key={article.strapiId}
          id={article.id}
          title={article.title}
          previewContent={article.content.slice(0, 200)}
          author={article.author.username}
          readTime={article.readTime}
          imageFluid={article.image.localFile.childImageSharp.fluid}
          createdAt={article.created_at.slice(0, 10)}
        />
      ))}
    </ArticlesGridWrapper>
  );
}
