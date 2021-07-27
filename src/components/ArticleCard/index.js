import React from "react";
import Img from "gatsby-image";
import { Link, navigate } from "gatsby";
import { Button } from "../Button";
import {
  ArticleCardWrapper,
  Title,
  Preview,
  Author,
  CreatedAt,
  ButtonWrapper,
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
      <Preview>{previewContent}</Preview>
      <ButtonWrapper>
        <Button
          fullWidth={true}
          onClick={() => navigate(`/articles/${articleTitle}`)}
        >
          CONTINUE READING
        </Button>
      </ButtonWrapper>
      <CreatedAt>CONTENT CREATED {createdAt}</CreatedAt>
    </ArticleCardWrapper>
  );
}
