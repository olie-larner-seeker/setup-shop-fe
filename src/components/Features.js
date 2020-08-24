import React from "react";

const Features = (data) => {
  const { intro, feature } = data.features;
  return (
    <div>
      <h1>{intro}</h1>
      <div>
        {feature.map((item, key) => {
          return (
            <div key={key}>
              <h4>{item.title}</h4>
              <p>{item.blurb}</p>
              <a href={item.ctaLink}>{item.ctaCopy}</a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
