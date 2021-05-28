import React from "react";
import { HeadlineWrapper } from "./styles";

export function Headline() {
  return (
    <HeadlineWrapper>
      <h3>
        HELLO <span>CONTENT</span>
      </h3>
      <div>
        <h4>Recent Posts</h4>
      </div>
    </HeadlineWrapper>
  );
}
