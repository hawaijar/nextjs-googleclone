import Head from "next/head";
import Header from "../components/Header";
function Search() {
  return (
    <div>
      <div>
        <Head>
          <title>Search results</title>
          <link rel="icon" href="https://www.google.com/favicon.ico" />
        </Head>

        {/* header */}
        <Header />
        {/* search result */}
      </div>
    </div>
  );
}

export default Search;
