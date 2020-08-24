// GraphQL API URL

/* Defaults */
let graphUrl;
let siteUrl;

// If we're running on localhost then use the local URL
if (window.location.hostname === "localhost") {
  graphUrl = "http://localhost:8888/Setup_Shop/setup-shop-be";
  siteUrl = "http://localhost:8888/Setup_Shop/setup-shop-be";
}

const Config = {
  gqlUrl: graphUrl,
  siteUrl: siteUrl.replace(/\/$/, ""), // Always remove any trailing slashes.
};

export default Config;
