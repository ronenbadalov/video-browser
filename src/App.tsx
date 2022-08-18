import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { getData } from "./api/api";
import "./App.scss";
import CenterMsg from "./components/CenterMsg/CenterMsg";
import SearchBar from "./components/SearchBar/SearchBar";
import VideoGrid from "./components/Video/VideoGrid";
import { VideoObj } from "./models/general.models";
import { RootState } from "./store";
import { extractYearOptions, filterVideos } from "./utils/utils";
import loadingAnimation from "./assets/loading.json";
import notFoundAnimation from "./assets/notFound.json";
import errorAnimation from "./assets/error.json";

const App = () => {
  const [videosData, setVideosData] = useState<VideoObj[]>([]);
  const [genresData, setGenres] = useState([]);
  const [yearOptions, setYearOptions] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const filterState = useSelector((state: RootState) => state.filterState);
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const data = await getData();
      if (!data) {
        setIsError(true);
        setIsLoading(false);
        return;
      }
      setVideosData(data.videos);
      setGenres(data.genres);
      setYearOptions(extractYearOptions(data.videos));
      setIsLoading(false);
    })();
  }, []);

  let filteredVideos = useMemo(
    () => filterVideos(videosData, filterState),
    [filterState, videosData]
  );

  let isOk = useMemo(
    () => !isLoading && !isError && filteredVideos.length > 0,
    [isLoading, isError, filteredVideos.length]
  );

  let isEmpty = useMemo(
    () => !isLoading && !isError && filteredVideos.length === 0,
    [isLoading, isError, filteredVideos.length]
  );

  return (
    <div className="App">
      <h1>Video Browser</h1>
      <SearchBar genresData={genresData} yearOptions={yearOptions} />
      {isOk && <VideoGrid videosData={filteredVideos} />}
      {isEmpty && (
        <CenterMsg
          animationData={notFoundAnimation}
          text="hmm... no luck this time, try another query"
        />
      )}
      {isLoading && !isError && (
        <CenterMsg
          animationData={loadingAnimation}
          text="Please wait while we fetch the data"
        />
      )}
      {!isLoading && isError && (
        <CenterMsg
          animationData={errorAnimation}
          text="Oops! seems like we got an error"
        />
      )}
    </div>
  );
};

export default App;
