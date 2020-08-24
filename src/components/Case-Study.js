import React from "react";

const CaseStudy = (data) => {
  const { title, featuredImage, slug } = data.caseStudyBanner.caseStudy;

  return (
    <div>
      <h4>Case Study</h4>
      <a href={`/post/${slug}`}>
        <h2>{title}</h2>
      </a>
      <img
        src={featuredImage.node.sourceUrl}
        alt={featuredImage.node.altText}
      />
    </div>
  );
};

export default CaseStudy;
