import React from "react";
import { HeaderWrapper } from "./styles";
import { Logo } from "../Logo";
import { FaInfoCircle } from "react-icons/fa";
import { Link } from "gatsby";

export function Header() {
  return (
    <HeaderWrapper>
      <div>
        <Link to="/">
          <Logo />
        </Link>
        <h3>DEVELOPER BLOG</h3>
      </div>
      <FaInfoCircle size="2rem" />
    </HeaderWrapper>
  );
}
