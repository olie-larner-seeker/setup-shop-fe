import React from "react";

const FeaturedArticles = (data) => {
  const { featuredArticles } = data.featuredArticles;

  return (
    <div>
      {featuredArticles.map((article, key) => {
        return (
          <div key={key}>
            <a href={`/post/${article.slug}`}>
              <h4>{article.title}</h4>
            </a>
            <img
              src={article.featuredImage.node.sourceUrl}
              alt={article.featuredImage.node.altText}
            />
          </div>
        );
      })}
    </div>
  );
};

export default FeaturedArticles;
