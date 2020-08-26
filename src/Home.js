import React from "react";
import { gql, useQuery } from "@apollo/client";

import getBlockDefinitions from "./utils/BlockQueries";
import mapBlocksToComponents from "./utils/BlockMapper";
const Home = () => {
  const GET_BLOCKS = gql`
    query MyQuery {
      pageBy(uri: "home") {
        id
        slug
        ${getBlockDefinitions()}
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_BLOCKS);

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

  return (
    <div className="relative w-full">{mapBlocksToComponents(data.pageBy)}</div>
  );
};

export default Home;
