import React from "react";
import Theme from "../Theme";
import { HeaderWrapper } from "./styles";
import { Link } from "gatsby";

export function Header() {
  return (
    <Theme>
      <HeaderWrapper>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/all-articles">Articles</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </HeaderWrapper>
    </Theme>
  );
}
