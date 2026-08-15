import React, { useContext, useState, useEffect, useCallback } from "react";
import ArticleContext from "../../context/ArticleContext";
import { Modal } from "../Modal";
import { FaFilter } from "react-icons/fa";
import {
  SectionWrapper,
  WavesWrapper,
  ArticlesGridWrapper,
  ArticleLead,
  ArticleSearch,
} from "./styles";
import { ArticleCard } from "../ArticleCard";

export function ArticleCardGrid({ isLanding }) {
  const { articles } = useContext(ArticleContext);
  const [search, setSearch] = useState("");
  const [show, setShow] = useState(false);
  const [badges, setBadges] = useState([]);
  const [filterBadges, setFilterBadges] = useState([]);

  const featuredArticles = articles.filter(article => article.isFeatured);
  const badgeArticles = articles.filter(article => {
    if (filterBadges.length > 0) {
      return article.badges.some(badge => filterBadges.includes(badge.id));
    } else {
      return true;
    }
  });
  const filteredArticles = badgeArticles.filter(article => {
    const title = article.title || "";
    return title.toLowerCase().includes(search.toLowerCase());
  });

  const handleClose = close => {
    close && setShow(false);
  };

  const buildBadges = useCallback(() => {
    const badgeSet = new Set();
    const allBadges = articles.flatMap(article => {
      return article.badges.filter(badge => {
        let tempBadge = JSON.stringify(badge);
        if (badgeSet.has(tempBadge)) {
          return false;
        }
        badgeSet.add(tempBadge);
        return true;
      });
    });
    setBadges(allBadges.sort((a, b) => a.name.localeCompare(b.name)));
  }, [articles]);

  useEffect(() => {
    buildBadges();
  }, [buildBadges]);

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
      {!isLanding && (
        <ArticleSearch>
          <input
            type="text"
            aria-label="Search Articles"
            placeholder="Search Articles..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <button onClick={() => setShow(true)}>
            <FaFilter />
          </button>
        </ArticleSearch>
      )}

      <ArticlesGridWrapper>
        {isLanding
          ? featuredArticles.map(article => (
              <ArticleCard
                key={article.strapiId}
                id={article.id}
                title={article.title}
                previewContent={article.preview}
                author={article.author.username}
                badges={article.badges}
                readTime={article.readTime}
                imageFluid={article.image.localFile.childImageSharp.fluid}
                imageAlt={
                  article.image.localFile.childImageSharp.fluid.originalName
                }
                createdAt={article.created_at.slice(0, 10)}
              />
            ))
          : filteredArticles.map(article => (
              <ArticleCard
                key={article.strapiId}
                id={article.id}
                title={article.title}
                previewContent={article.preview}
                author={article.author.username}
                badges={article.badges}
                readTime={article.readTime}
                imageFluid={article.image.localFile.childImageSharp.fluid}
                imageAlt={
                  article.image.localFile.childImageSharp.fluid.originalName
                }
                createdAt={article.created_at.slice(0, 10)}
              />
            ))}
      </ArticlesGridWrapper>
      <Modal
        show={show}
        handleClose={handleClose}
        filterBadges={filterBadges}
        handleSetFilterBadges={setFilterBadges}
        badges={badges}
        content={{ title: "Filter by article tags" }}
      />
    </SectionWrapper>
  );
}
