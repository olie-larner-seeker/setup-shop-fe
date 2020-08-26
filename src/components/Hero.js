import React from "react";

import Cta from "./Cta";
import CtaHelper from "../utils/ctaHelper";

const Hero = (data) => {
  const { headline, logo, image, subheading, cta } = data.hero;

  const renderCta = (cta) => {
    const ctastyle = CtaHelper({
      style: cta.ctaStyle,
    });

    return (
      <Cta ctastyle={ctastyle} ctaCopy={cta.ctaCopy} ctaLink={cta.ctaLink} />
    );
  };

  return (
    <div
      className="relative flex w-full min-h-screen bg-center bg-cover"
      style={{ backgroundImage: `url(${image.sourceUrl})` }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-25"></div>
      <div className="container z-10 flex flex-col justify-center mx-auto">
        <div className="w-full max-w-screen-md pt-48 mx-auto text-center text-white ">
          <h1 dangerouslySetInnerHTML={{ __html: headline }} />
          <p>{subheading}</p>
          <div className="flex flex-row justify-center pt-8">
            {cta.map((item, key) => {
              return <div key={key}>{renderCta(item, key)}</div>;
            })}
          </div>
        </div>
        <div className="flex flex-row justify-end py-10">
          <img src={logo.sourceUrl} alt={logo.altText} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
