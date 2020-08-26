import React from "react";

const FeaturedArticles = (data) => {
  const { featuredArticles } = data.featuredArticles;

  return (
    <div className="grid w-full grid-cols-3">
      {featuredArticles.map((article, key) => {
        return (
          <div
            key={key}
            className="p-12 text-white bg-center bg-cover h-halfscreen"
            style={{
              backgroundImage: `url(${article.featuredImage.node.sourceUrl})`,
            }}
          >
            <p className="pb-1 text-lg">Article</p>
            <a
              className="inline-block w-7/12 text-xl font-bold leading-tight"
              href={`/post/${article.slug}`}
            >
              {article.title}
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default FeaturedArticles;
