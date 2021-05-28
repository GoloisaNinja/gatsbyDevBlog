import React from "react";
import { HeadlineWrapper } from "./styles";

export function Headline() {
  return (
    <HeadlineWrapper>
      <h1>
        Look. A <span>blog</span>.
      </h1>
      <div>
        <h4>Recent Posts</h4>
      </div>
    </HeadlineWrapper>
  );
}
