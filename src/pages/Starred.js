import React, { useEffect, useState } from "react";
import MainPageLayout from "../components/MainPageLayout";
import { apiGet } from "../misc/config";
import { useShow } from "../misc/custom-hooks";
import ShowGrid from "../components/show/ShowGrid";

const Starred = () => {
  const [Starred] = useShow();

  const [shows, setShows] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (Starred && Starred.length > 0) {
      const promises = Starred.map((showId) => apiGet(`/shows/${showId}`));

      Promise.all(promises)
      .then(apiData => apiData.map(show => ({show})))
        .then((results) => {
          setShows(results);
          setIsLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, [Starred]);

  return (
    <MainPageLayout>
      {isLoading && <div>shows are still loading</div>}
      {error && <div>Error occured : {error}</div>}
      {!isLoading && !shows && <div>No shows were added</div>}
      {!isLoading && !error && shows && <ShowGrid data={shows} />}
    </MainPageLayout>
  );
};

export default Starred;
