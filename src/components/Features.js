import React from "react";
import Cta from "./Cta";
import CtaHelper from "../utils/ctaHelper";

const Features = (data) => {
  const { intro, feature } = data.features;
  const renderCta = (cta) => {
    const ctastyle = CtaHelper({
      style: "clear-blue",
    });

    return (
      <Cta
        ctastyle={ctastyle}
        ctaCopy={cta.ctaCopy}
        ctaLink={cta.ctaLink}
        extraStyle="text-center inline-block text-sm"
      />
    );
  };
  return (
    <div className="w-full max-w-screen-xl py-16 mx-auto">
      <div className="flex w-11/12 mx-auto">
        <h1
          className="w-2/5 leading-snug features-headline"
          dangerouslySetInnerHTML={{ __html: intro }}
        />
        <div className="grid w-3/5 grid-flow-row grid-cols-2 grid-rows-3 gap-6 pl-10">
          {feature.map((item, key) => {
            return (
              <div className="table h-full" key={key}>
                <div className="table-cell align-middle">
                  <h3 className="pb-4 uppercase">{item.title}</h3>
                  <p className="pb-6 text-sm">{item.blurb}</p>
                  {renderCta(item)}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Features;
