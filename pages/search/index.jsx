import React from "react";
import Head from "next/head";
import Header from "./components/Header";
import { createSearchURL } from "./utils/createSearchURL";
import { Response } from "../../Response";
import SearchResults from "./components/SearchResults";
import { useRouter } from "next/router";

const Search = ({ results }) => {
  const router = useRouter();

  const message = `${router.query.term} - Google Search`;
  return (
    <div>
      <Head>
        <title>{message}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <SearchResults results={results} />
    </div>
  );
};

export default Search;

export async function getServerSideProps(ctx) {
  const useDummyData = false;
  const startIndex = ctx.query.start || 0;

  const data = useDummyData
    ? Response
    : await fetch(createSearchURL(ctx.query.term, startIndex)).then((data) =>
        data.json()
      );

  return {
    props: {
      results: data,
    },
  };
}
