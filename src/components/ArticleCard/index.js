import React from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";
import {
  ArticleCardWrapper,
  Title,
  Preview,
  Author,
  CreatedAt,
} from "./styles";

export function ArticleCard({
  id,
  title,
  previewContent,
  author,
  readTime,
  imageFluid,
  imageAlt,
  createdAt,
}) {
  const regex = new RegExp(/\s/gm);
  const articleTitle = title.replace(regex, "_");
  return (
    <ArticleCardWrapper>
      <div>
        <div>
          <Link to={`/articles/${articleTitle}`} alt={title}>
            <Img fluid={imageFluid} alt={imageAlt} />
          </Link>
        </div>
      </div>

      <Title>{title}</Title>
      <Author>
        by {author}
        <div>{readTime}</div>
      </Author>
      <Preview>
        {previewContent}...
        <span>
          <Link to={`/articles/${articleTitle}`}>READ MORE</Link>
        </span>
      </Preview>
      <CreatedAt>CONTENT CREATED {createdAt}</CreatedAt>
    </ArticleCardWrapper>
  );
}
