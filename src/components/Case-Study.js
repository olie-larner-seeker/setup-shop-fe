import React from "react";

const CaseStudy = (data) => {
  const { title, featuredImage, slug } = data.caseStudyBanner.caseStudy;

  return (
    <div
      className="relative w-full"
      style={{
        backgroundImage: `url(${featuredImage.node.sourceUrl})`,
        height: "495px",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="w-9/12 pt-16 mx-auto text-white">
        <h3 className="pb-1 font-normal">Case Study</h3>
        <a className="text-xl font-bold basic-sans" href={`/post/${slug}`}>
          {title}
        </a>
      </div>
    </div>
  );
};

export default CaseStudy;
