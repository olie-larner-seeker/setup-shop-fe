import React from "react";

const Hero = (data) => {
  const { headline, logo, image, subheading, cta } = data.hero;

  return (
    <div>
      <h1>{headline}</h1>
      <h3>{subheading}</h3>
      <img src={image.sourceUrl} alt={image.altText} />
      {cta.map((item, key) => {
        return (
          <div key={key} className={`${item.ctaStyle}`}>
            <a href={item.ctaLink}>{item.ctaCopy}</a>
          </div>
        );
      })}
      <img src={logo.sourceUrl} alt={logo.altText} />
    </div>
  );
};

export default Hero;
