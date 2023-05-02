import { useGlobalContext } from "../../hooks/context";
import { useEffect, useState } from "react";
import Grid from "../../components/Grid/Grid";

const Search = () => {
  const { searchResults, setSearchResults } = useGlobalContext();
  const [data, setData] = useState(null);

  useEffect(() => {
    if (searchResults) {
      setData(searchResults);
      setSearchResults(null);
    }
  }, [searchResults]);

  return (
    <>
      {data?.length === 0 ? (
        <p>No results found. Please try a different search.</p>
      ) : (
        <Grid listings={data} />
      )}
    </>
  );
};
export default Search;
