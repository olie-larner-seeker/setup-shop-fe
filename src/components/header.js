import React from "react";
import { useQuery, gql } from "@apollo/client";

const Header = () => {
  const GET_LINKS = gql`
    query MyQuery {
      menuItems {
        edges {
          node {
            connectedNode {
              node {
                ... on Page {
                  id
                  slug
                  title(format: RENDERED)
                }
                ... on Post {
                  title(format: RENDERED)
                  slug
                }
              }
            }
            label
          }
        }
      }
      siteSettings {
        siteSettings {
          siteLogo {
            altText
            sourceUrl(size: LARGE)
          }
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_LINKS);

  if (loading) {
    return (
      <div className="fixed top-0 z-10 flex items-center justify-center w-screen h-screen bg-white">
        <h1>Loading...</h1>
      </div>
    );
  }
  if (error) {
    console.log(error);
    return <>Ooops...</>;
  }

  const { siteSettings } = data.siteSettings;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 hidden w-full max-w-screen-xl py-6 text-white sm:block">
      <ul className="flex items-center justify-around w-11/12 mx-auto">
        {data.menuItems.edges.map((item, key) => {
          let url;
          if (item.node.connectedNode.node.__typename === "Post") {
            url = `/post/${item.node.connectedNode.node.slug}`;
          }
          if (item.node.connectedNode.node.__typename === "Page") {
            url = `/${item.node.connectedNode.node.slug}`;
          }
          if (item.node.connectedNode.node.slug === "home") {
            return (
              <li key={key}>
                <a href={url}>
                  <img
                    src={siteSettings.siteLogo.sourceUrl}
                    alt={siteSettings.siteLogo.altText}
                  />
                </a>
              </li>
            );
          }
          return (
            <li key={key}>
              <a href={url}>{item.node.label}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Header;
