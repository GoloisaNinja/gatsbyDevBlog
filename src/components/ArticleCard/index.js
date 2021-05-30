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
  createdAt,
}) {
  return (
    <ArticleCardWrapper>
      <div>
        <div>
          <Link to={`/articles/${id}`}>
            <Img fluid={imageFluid} />
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
          <Link to={`/articles/${id}`}>READ MORE</Link>
        </span>
      </Preview>
      <CreatedAt>CONTENT CREATED {createdAt}</CreatedAt>
    </ArticleCardWrapper>
  );
}
