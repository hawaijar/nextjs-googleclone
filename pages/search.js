import Head from "next/head";
import Header from "../components/Header";
import ResponseData from "../data";
import { useRouter } from "next/router";
import SearchResult from "../components/SearchResult";

function Search({ results }) {
  console.log(results);
  const router = useRouter();
  return (
    <div>
      <div>
        <Head>
          <title>{`${router.query.term} - Google Search`}</title>
          <link rel="icon" href="https://www.google.com/favicon.ico" />
        </Head>

        {/* header */}
        <Header />
        {/* search result */}
        <SearchResult results={results} />
      </div>
    </div>
  );
}
export default Search;

// context key - https://cse.google.com/cse/create/new
// Api Key - https://developers.google.com/custom-search/v1/introduction#identify_your_application_to_google_with_api_key

const SEARCH_API = "https://www.googleapis.com/customsearch/v1";
const { API_KEY, CONTEXT_KEY } = process.env;

// NextJS specific SSR directive(s)
export async function getServerSideProps(context) {
  const useDummyData = true;
  const startIndex = context.query.start || "0";
  const URL = `${SEARCH_API}?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`;
  const data = useDummyData
    ? ResponseData
    : await fetch(URL).then((response) => response.json());

  return {
    props: {
      results: data, // inject into the props of Search component (above)
    },
  };
}
