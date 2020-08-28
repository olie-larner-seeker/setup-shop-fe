import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import Hamburger from "react-hamburger-menu";
import classnames from "classnames";

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
  const [isOpen, setIsOpen] = useState(false);

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
    <>
      <div className="fixed top-0 left-0 right-0 z-50 w-full max-w-screen-xl py-6 overflow-x-hidden text-white">
        <div className="relative z-50 flex justify-between w-11/12 mx-auto lg:hidden">
          <div className="">
            <a href="/">
              <img
                src={siteSettings.siteLogo.sourceUrl}
                alt={siteSettings.siteLogo.altText}
              />
            </a>
          </div>
          <div className="">
            <Hamburger
              isOpen={isOpen}
              menuClicked={() => {
                setIsOpen(!isOpen);
                return null;
              }}
              color="white"
              width={20}
              height={15}
              strokeWidth={2}
            />
          </div>
        </div>
      </div>
      <div
        className={classnames(
          "fixed top-0 left-0 right-0 z-40 w-screen max-w-screen-xl sm:w-1/2 transition duration-500 ease-in-out h-screen py-6 flex lg:block bg-brandteal lg:bg-transparent lg:h-auto lg:w-11/12",
          { "left-full lg:left-0": !isOpen, "left-0 sm:left-1/2": isOpen }
        )}
        style={{ transitionProperty: "left" }}
      >
        <ul className="flex flex-col items-center justify-center mx-auto text-white lg:justify-around lg:flex-row lg:relative">
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
                <li className="hidden lg:block" key={key}>
                  <a href="/">
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
    </>
  );
};

export default Header;
